// Enums 

enum Direction { 
    North,
    South,
    East,
    West
}

const pos = {
    x: 100,
    y: 100,
    direction: Direction
}

enum ClothingSizes {
    ExtraSmall = "PP",
    Small = "P",
    Medium = "M",
    Large = "G",
    ExtraLarge = "GG"
}

const cloth = {
    color: "green",
    size: ClothingSizes.Medium
}

enum ButtonStyle {
    Green,
    Red,
    Blue
}

interface Button {
    label: string,
    style: ButtonStyle
}

const button: Button = {
    label: "Click me",
    style: ButtonStyle.Green
}