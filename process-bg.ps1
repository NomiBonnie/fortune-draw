Add-Type -AssemblyName System.Drawing

$inputPath = "assets\icon-lantern-3d.png"
$outputPath = "assets\icon-lantern-processed.png"

# 目标背景色 (和网页背景一致的红色)
$targetR = 183
$targetG = 28
$targetB = 28

# 阈值 - 颜色差异在这个范围内的都替换成纯色
$threshold = 60

$image = [System.Drawing.Image]::FromFile((Resolve-Path $inputPath))
$bitmap = New-Object System.Drawing.Bitmap $image

for ($x = 0; $x -lt $bitmap.Width; $x++) {
    for ($y = 0; $y -lt $bitmap.Height; $y++) {
        $pixel = $bitmap.GetPixel($x, $y)
        
        # 计算与目标红色的差异
        $diffR = [Math]::Abs($pixel.R - $targetR)
        $diffG = [Math]::Abs($pixel.G - $targetG)
        $diffB = [Math]::Abs($pixel.B - $targetB)
        $totalDiff = $diffR + $diffG + $diffB
        
        # 如果颜色接近目标红色，就替换成纯色
        if ($totalDiff -lt $threshold) {
            $bitmap.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($pixel.A, $targetR, $targetG, $targetB))
        }
    }
}

$bitmap.Save((Join-Path (Get-Location) $outputPath), [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()
$image.Dispose()

Write-Output "Processed: $outputPath"
