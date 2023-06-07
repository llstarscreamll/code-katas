<?php

use PHPUnit\Framework\TestCase;

class BirthdayCakeCandlesTest extends TestCase
{
    public function testThatFunction(): void
    {
        $f = fopen(__DIR__.'/../_data/BirthdayCakeCandles_input01.txt', 'r');
        $candlesTemp = rtrim(fgets($f));
        $candles = array_map('intval', preg_split('/ /', $candlesTemp, -1, PREG_SPLIT_NO_EMPTY));
        
        $this->assertEquals(7174, birthdayCakeCandles($candles));
    }
}