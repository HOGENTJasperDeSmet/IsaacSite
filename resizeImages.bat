# ================================
# CONFIG
# ================================

$ImageFolder = "C:\Users\Jasper\Jasper\IsaacSite\images"
$MaxWidth = 1920
$Quality = 75

# ================================
# SCRIPT
# ================================

Write-Host "Converting and optimizing images in $ImageFolder to WebP" -ForegroundColor Cyan

# Find all common image formats
Get-ChildItem -Path $ImageFolder -Recurse -Include *.webp, *.jpeg, *.png | ForEach-Object {

    $InputFile = $_.FullName
    # Create the new file path by changing the extension to .webp
    $OutputFile = [System.IO.Path]::ChangeExtension($InputFile, ".webp")

    Write-Host "Processing: $($_.Name) -> $([System.IO.Path]::GetFileName($OutputFile))"

    # Run ImageMagick
    magick "$InputFile" `
        -auto-orient `
        -resize "$($MaxWidth)x>" `
        -strip `
        -quality $Quality `
        -define webp:lossless=false `
        "$OutputFile"

}

Write-Host "Done. All images converted to WebP and originals removed." -ForegroundColor Green