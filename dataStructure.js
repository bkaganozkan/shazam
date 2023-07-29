class BST {
  constructor(value) {
    // this.pattern = pattern;
    this.value = value;
    this.children = {};
  }

  insert(pattern) {
    let arr = pattern.split(" ");
    let nodeValue = arr.shift();
    arr = arr.join(" ");
    if (this.children[nodeValue]) this.children[nodeValue].insert(arr);
    else {
      this.children[nodeValue] = new BST(nodeValue);
      if (arr.length) {
        this.children[nodeValue].insert(arr);
      }
    }
  }

  traverse(pattern, node = this) {
    if (!pattern.length) return;
    let currentPattern = pattern.shift()
    let keys = Object.keys(node.children)
    if(keys.length === 1){
      node = this.traverseHelper(currentPattern,node, {fallBack :this.traverseFallback(pattern, this,0)})
      console.log(node)
      
      node.traverse(pattern, node)
    }
    if(keys.length > 1){
      node = this.traverseHelper(currentPattern, node, keys)
      node.traverse(pattern, node)
    }
  }
  traverseFallback(pattern = null, node = this, count){
    console.log(count);
      if(node.children[pattern]) return count
      else {
        count++
        this.traverseHelper(pattern,node,,count)
      }
  }
  traverseHelper(pattern = null, node = this, keys = [], fallBack = null) {
    if(!node.children[pattern]){
      fallBack;
      return node
    }
    if (!pattern) return this;
    if(!Array.isArray(pattern)) return node.children[pattern]
    if(keys.length){
      for (const key of keys) {
        if(key === pattern) return node.children[key]
      }
    }
  }
  traverseMultiNodeSearch(){

  }

  // async findHeight(fooFunc, height){
  //   new Promise((resolve,reject) => {
  //     if(!fooFunc) resolve(height)
  //     return this.findHeight(fooFunc, height+1)
  //   })
  // }

  show(value = null) {
    console.log(this);
    let key = Object.keys(this.children);
    value = key.shift();
    if (this.children[value]) this.children[value].show(value);
    else return;
  }
}

export default BST;
