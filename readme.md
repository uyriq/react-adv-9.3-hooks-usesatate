Функциональные компоненты ничем не хуже классовых. С ними можно делать всё то же самое. Чем там всё время хвастаются классовые — внутреннее состояние? Легко! Перепишите старый тумблер, в котором используется состояние.
И да поможет вам хук.
Сначала вспомните, как превращать классовые компоненты в функциональные.
Затем в начале компонента добавьте хук React.useState, который даст вам переменную isActive вместо this.state = { /_ ... _/ }, и функцию setIsActive вместо this.setState({ /_ ... _/ }).
А вот handleClick станет обычной функцией внутри Switch.
