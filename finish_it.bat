@echo off
echo ==============================================
echo   FINAL FIX: Renaming & Uploading Resume
echo ==============================================

cd resume_pdf

echo.
echo [1/3] Verifying resume file...
if exist "nisar_resume1.pdf" (
    echo   "nisar_resume1.pdf" found and active.
) else (
    echo   WARNING: "nisar_resume1.pdf" NOT FOUND!
    echo   Please ensure your resume is in the resume_pdf folder.
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
