$content = [System.IO.File]::ReadAllText("prompts/00-wayfinder-hub-foundation.md")
$matches = [regex]::Matches($content, '(?ms)```text\r?\n([\s\S]*?)```')
Write-Output "Matches: $($matches.Count)"
if ($matches.Count -eq 2) {
    $first = $matches[0].Groups[1].Value
    $length = $first.Length
    Write-Output "CharCountXml: $length"
    $nonEmpty = $length -gt 0
    Write-Output "NonEmpty: $nonEmpty"
    $anchors = @("app/", "app-state.js", "module-registry.js", "router.js", "wayfinder-hub", "#home", "#profile", "prefers-reduced-motion")
    foreach ($a in $anchors) {
        $has = $first.Contains($a)
        Write-Output "Anchor $a | Contains: $has"
    }
}
