module.exports = function (w) {

    return {
      files: [
        'src/**/*.ts'
      ],
  
      tests: [
        'src/core/httpcall.spec.ts'
      ]
    };
  };