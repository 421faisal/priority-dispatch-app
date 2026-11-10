# Script to update blog post content

$filePath = "c:\Users\421fa\Downloads\Priority-Dispatch--main\Priority-Dispatch--main\app\blog\what-is-freight-dispatching\page.tsx"
$newContentPath = "c:\Users\421fa\Downloads\Priority-Dispatch--main\Priority-Dispatch--main\blog-content-new.tsx"

# Read the files
$currentContent = Get-Content $filePath -Raw -Encoding UTF8
$newContent = Get-Content $newContentPath -Raw -Encoding UTF8

# Find the start and end markers for the content section
$startMarker = '<div className="prose prose-lg dark:prose-invert prose-primary mx-auto max-w-none text-foreground/90 leading-relaxed">'
$endMarker = '                        </Reveal>

                        {/* Author Bio */}'

# Find the positions
$startIndex = $currentContent.IndexOf($startMarker)
$endIndex = $currentContent.IndexOf($endMarker, $startIndex)

if ($startIndex -eq -1 -or $endIndex -eq -1) {
    Write-Error "Could not find content markers in the file"
    exit 1
}

# Extract the before and after sections
$beforeContent = $currentContent.Substring(0, $startIndex)
$afterContent = $currentContent.Substring($endIndex)

# Combine: before + new content + after
$updatedContent = $beforeContent + $newContent.Trim() + "`n`n                " + $afterContent

# Write the updated content back
$updatedContent | Out-File $filePath -Encoding UTF8 -NoNewline

Write-Output "Blog content updated successfully!"
Write-Output "File: $filePath"
