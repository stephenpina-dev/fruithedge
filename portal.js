/**
 * Portal Animation System
 * WebGL2 glass bubble shader with CSS drop wave rings
 */

const Portal = (function() {
  'use strict';

  // WebGL contexts for each portal
  const contexts = {};

  // Animation frame ID
  let animationFrameId = null;

  // Start time for shader animation
  const startTime = Date.now();

  // Color tints for each portal type
  const tints = {
    'portal-hero': [0.3, 0.5, 0.6],    // Neutral cyan
    'portal-aq': [0.4, 0.6, 0.3],      // Muted lime
    'portal-ri': [0.6, 0.4, 0.35],     // Muted peach
    'portal-ci': [0.6, 0.35, 0.45],    // Muted pink
    'portal-alpha': [0.6, 0.5, 0.25]   // Muted gold
  };

  // Vertex Shader
  const vertexShaderSource = `#version 300 es
    precision highp float;
    in vec4 position;
    void main() {
      gl_Position = position;
    }
  `;

  // Fragment Shader - Glass bubble effect
  const fragmentShaderSource = `#version 300 es
    precision highp float;
    out vec4 fragColor;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec3 u_tint;

    #define R u_resolution
    #define T u_time/8.
    #define ZOOM 2.2

    void main() {
      float d = 0.0, s;
      vec2 I = gl_FragCoord.xy;
      mat2 M = mat2(cos(T+vec4(0,33,11,0)));
      vec4 O = vec4(0.0);

      for(float i=0.0; i<1e2; i++){
        vec3 p = vec3((I+I - R.xy)/R.y*d*M/ZOOM, d-8.);
        p.yz *= M;
        s = .01 + .1 * abs(max(sin(dot(cos(p+T).yzx, sin(p+T))/.12), length(p)-4.) - i/80.);
        d += s;
        O += max(sin(vec4(3,2,1,1)*i*.4)/s, -length(p*p));
      }

      vec4 base = tanh(O*O/5e5) * 0.55;
      fragColor = vec4(
        base.r * (0.3 + u_tint.r * 0.7),
        base.g * (0.3 + u_tint.g * 0.7),
        base.b * (0.3 + u_tint.b * 0.7),
        1.0
      );
    }
  `;

  /**
   * Create and compile a shader
   */
  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  /**
   * Create a WebGL program from shaders
   */
  function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  /**
   * Initialize WebGL for a single canvas
   */
  function initGL(canvas, tint) {
    const gl = canvas.getContext('webgl2');

    if (!gl) {
      console.warn('WebGL2 not available for', canvas.id);
      canvas.classList.add('webgl-fallback');
      return null;
    }

    // Create shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) {
      canvas.classList.add('webgl-fallback');
      return null;
    }

    // Create program
    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) {
      canvas.classList.add('webgl-fallback');
      return null;
    }

    // Set up geometry (full-screen quad)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]), gl.STATIC_DRAW);

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, 'position');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const tintLocation = gl.getUniformLocation(program, 'u_tint');

    return {
      gl,
      program,
      positionBuffer,
      positionLocation,
      resolutionLocation,
      timeLocation,
      tintLocation,
      tint
    };
  }

  /**
   * Render a single frame for all portals
   */
  function render() {
    const currentTime = (Date.now() - startTime) / 1000;

    for (const id in contexts) {
      const ctx = contexts[id];
      if (!ctx) continue;

      const { gl, program, positionBuffer, positionLocation, resolutionLocation, timeLocation, tintLocation, tint } = ctx;
      const canvas = gl.canvas;

      // Resize canvas to match display size
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);

      // Set up position attribute
      gl.enableVertexAttribArray(positionLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      // Set uniforms
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform3fv(tintLocation, tint);

      // Draw
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    animationFrameId = requestAnimationFrame(render);
  }

  /**
   * Initialize all portal canvases
   */
  function init() {
    const canvasIds = ['portal-hero', 'portal-aq', 'portal-ri', 'portal-ci', 'portal-alpha'];

    canvasIds.forEach(id => {
      const canvas = document.getElementById(id);
      if (canvas) {
        const tint = tints[id] || [0.5, 0.5, 0.5];
        contexts[id] = initGL(canvas, tint);
      }
    });

    // Start render loop if any context was created
    if (Object.keys(contexts).length > 0) {
      render();
    }
  }

  /**
   * Animate score emergence for a specific portal
   * @param {string} type - 'aq', 'ri', 'ci', or 'alpha'
   * @param {number} score - The calculated score
   */
  function animateScore(type, score) {
    const boxId = type === 'alpha' ? 'composite-num' : `${type}-result`;
    const box = type === 'alpha'
      ? document.querySelector('.composite-box')
      : document.getElementById(`${type}-result`);

    if (!box) {
      console.warn('Portal box not found for type:', type);
      return;
    }

    // Remove any existing animation classes
    box.classList.remove('animating', 'generating', 'rising', 'calculated');

    // Phase 1: Activation (0-200ms)
    box.classList.add('animating');

    // Phase 2: Generating (200ms-1000ms)
    setTimeout(() => {
      box.classList.add('generating');
    }, 200);

    // Phase 3: Rising (1000ms-2200ms)
    setTimeout(() => {
      box.classList.remove('generating');
      box.classList.add('rising');
    }, 1000);

    // Phase 4: Complete (2200ms+)
    setTimeout(() => {
      box.classList.remove('animating', 'rising');
      box.classList.add('calculated');
    }, 2200);
  }

  /**
   * Set score without animation (for loading saved scores)
   * @param {string} type - 'aq', 'ri', 'ci', or 'alpha'
   * @param {number} score - The score to display
   */
  function setScore(type, score) {
    const box = type === 'alpha'
      ? document.querySelector('.composite-box')
      : document.getElementById(`${type}-result`);

    if (!box) return;

    // Remove animation classes and set to calculated state
    box.classList.remove('animating', 'generating', 'rising');
    box.classList.add('calculated');
  }

  /**
   * Cleanup WebGL contexts
   */
  function destroy() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    for (const id in contexts) {
      const ctx = contexts[id];
      if (ctx && ctx.gl) {
        const gl = ctx.gl;
        gl.deleteProgram(ctx.program);
        gl.deleteBuffer(ctx.positionBuffer);
      }
      delete contexts[id];
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded, initialize after a short delay to ensure elements exist
    setTimeout(init, 100);
  }

  // Public API
  return {
    init,
    animateScore,
    setScore,
    destroy
  };
})();
