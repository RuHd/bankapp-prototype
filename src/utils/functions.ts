export const hideContent = (isHiding : boolean) => {
  return !isHiding;
}

export const formatCurrency = (amount : number) => {
  return amount.toFixed(2)
}

export const getSignal = (operation : "deposit" | "withdrawal") => {
  return operation === "deposit" ? "+" : "-"
}

export const checkNumMinorTen = (date: number) => {
  return date < 10 ? `0${date}` : date;
}

export const isValidDate = (day: number, dateType: "day" | "month") => {
  if (dateType === "month") {
    return day >= 1 && day <= 12;
  }
  return day >= 1 && day <= 31;
}

export const getAlignDirection = (contentDirection : "row" | "column", alignContent: string) => {
  return contentDirection == "row" ? {justifyContent: alignContent} : {alignItems: alignContent}
}

export const checkToUpperCase = (name: string, hasToUpperCase: boolean) => {
  if (hasToUpperCase) {
    return name.toUpperCase()
  } 
  return name
}

//Function that receives a name and return its abbreviation

//TODO
// 1- Receives a name
// 2- check if the name has a surname (empty space between)
//  2.1- 
// 3- If true, get the first char from each word
// 4- If false, return the first and second char from the single name

export const getAbbreviationFromWord = (initialName: string) => {
  if ( initialName.includes(" ")) {
    const arrName = initialName.split(" ")
    return `${arrName[0][0].toUpperCase()}${arrName[1][0].toUpperCase()}`
  }

  return `${initialName[0].toUpperCase()}${initialName[1]}`
}