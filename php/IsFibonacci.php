<?php

function isFibonacci(string $input) {
    $result = "";
    $numbers = explode("\n", $input);
    $fibonacci = [0,1];
    $lastValue = 1;

    foreach ($numbers as $i => $v) {
        if ($i === 0) continue;

        while($lastValue <= $v) {
            $lastValue = $fibonacci[count($fibonacci) - 2] + $fibonacci[count($fibonacci) - 1];
            $fibonacci[] = $lastValue;
        }

        $result .= in_array($v, $fibonacci) ? "YES\n" : "NO\n";
    }

    return $result;
}