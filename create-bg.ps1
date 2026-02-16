Add-Type -AssemblyName System.Drawing

$inputPath = "assets\lantern-centered.png"
$outputPath = "assets\bg-final.png"

# 目标尺寸 (手机竖屏)
$targetWidth = 1024
$targetHeight = 1792

# 背景纯色
$bgColor = [System.Drawing.Color]::FromArgb(255, 183, 28, 28)  # #B71C1C

# 读取灯笼图
$lanternImg = [System.Drawing.Image]::FromFile((Resolve-Path $inputPath))

# 创建新画布
$canvas = New-Object System.Drawing.Bitmap $targetWidth, $targetHeight
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# 填充纯色背景
$brush = New-Object System.Drawing.SolidBrush $bgColor
$g.FillRectangle($brush, 0, 0, $targetWidth, $targetHeight)

# 缩小灯笼到合适大小 (约300px)
$lanternSize = 350
$scale = $lanternSize / [Math]::Max($lanternImg.Width, $lanternImg.Height)
$newW = [int]($lanternImg.Width * $scale)
$newH = [int]($lanternImg.Height * $scale)

# 放到右上角，部分超出画布
$x = $targetWidth - ($newW * 0.6)  # 只显示60%
$y = -($newH * 0.3)  # 顶部超出30%

$g.DrawImage($lanternImg, [int]$x, [int]$y, $newW, $newH)

# 保存
$canvas.Save((Join-Path (Get-Location) $outputPath), [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$canvas.Dispose()
$lanternImg.Dispose()
$brush.Dispose()

Write-Output "Created: $outputPath"
