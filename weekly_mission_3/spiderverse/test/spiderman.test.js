describe("Test Suite Dummy Description", () => {
    test('1) Create an spiderman object', () => {

        
      const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garlfield",2,"Sony")


      expect(andrewGarfield).toBe("Spiderman Sony")
      expect(andrewGarfield).toBe(31)
      expect(andrewGarfield).toBe("Andrew Garfield")
      expect(andrewGarfield).toBe(31)
      expect(andrewGarfield).toBe("Sony")
    });
  })