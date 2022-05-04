//solução1
function verificaPalindromo(string){
    if (!string) return "string inexistente";
    return string.split("").reverse().join("") === string;
  // solução2
  // omo
  // 012
  // abbbba
  // 012345
}

  function verificaPalindromo2(string){
    if (!string) return "string inexistente";
    for (let i=0;i<string.length/2; i++){
      if (string[i] !== string[string.length-1-i]){
        return false;
      }
    }
    return true;
  }

  console.log(verificaPalindromo2("banho"))