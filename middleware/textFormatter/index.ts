export default (text: string) => {

  return text.replace(/<!--[\s\S]*?--!?>/g, "").replace(/<\/?[a-z][^>]*(>|$)/gi, "");
  
}