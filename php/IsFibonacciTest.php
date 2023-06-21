<?php

use PHPUnit\Framework\TestCase;

class IsFibonacciTest extends TestCase
{
    public function testThatFunction(): void
    {
        $expected = "YES\nNO\nYES\n";
        $result = isFibonacci(file_get_contents(__DIR__.'/../_data/IsFibonacci_input01.txt'));

        $this->assertEquals($expected, $result);
    }
}