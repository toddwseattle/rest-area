$projroot = git rev-parse --show-toplevel
Set-Location -Path $projroot'\src\app\core'
tsc -lib es2015 httpcall.spec.ts
jasmine .\httpcall.spec.js


