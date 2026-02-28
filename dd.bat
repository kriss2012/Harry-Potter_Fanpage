@echo off
echo Fixing PostCSS configuration...

REM Rename file if exists
if exist postcss.config.js (
    ren postcss.config.js postcss.config.cjs
    echo Renamed postcss.config.js to postcss.config.cjs
)

REM Overwrite with proper CommonJS config
(
echo module.exports = {
echo   plugins: {
echo     tailwindcss: {},
echo     autoprefixer: {},
echo   },
echo }
) > postcss.config.cjs

echo.
echo Fix completed!
echo Restarting development server...
echo.

npm run dev

pause