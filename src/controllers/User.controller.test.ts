describe('Users Controlles', () => {
    it('Deve somar 1 + 1', () => {
        function soma(a: number, b: number) {
            return a + b
        }

        const result = soma(1, 2)

        expect(result).toEqual(3)
    })
})
