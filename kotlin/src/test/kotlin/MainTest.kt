// kotlin/src/test/kotlin/MainTest.kt
package com.example

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class CalculatorTest {

    @Test
    fun testAdd() {
        val calculator = Calculator()
        assertEquals(5, calculator.add(2, 3))
    }

    @Test
    fun testSubtract() {
        val calculator = Calculator()
        assertEquals(1, calculator.subtract(3, 2))
    }
}