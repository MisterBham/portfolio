const changeColorMode() = {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue("red.500", "red.200")
  const color = useColorModeValue("white", "gray.800")

  
}