@echo off
echo ==============================================
echo   FINAL FIX: Renaming & Uploading Resume
echo ==============================================

cd resume_pdf

echo.
echo [1/3] Switch to correct filename...
if exist "Nisar Ahmed - Resume.pdf" (
    del "Nisar Ahmed - Resume.pdf"
    echo   Deleted old "Nisar Ahmed - Resume.pdf"
)
if exist "Nisar Ahmed - Resume1.pdf" (
    echo   "Nisar Ahmed - Resume1.pdf" found and active.
) else (
    echo   NOTE: Resume1.pdf not found! Please check.
)

cd ..

echo.
echo [2/3] Uploading clean version...
git add .
git commit -m "Update: Final clean resume upload"
git push

echo.
echo ==============================================
echo   ALL DONE. 
echo   The clean resume is live.
echo ==============================================
pause
