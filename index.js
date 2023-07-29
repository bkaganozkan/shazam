import data from "./data.js";
import BST from "./dataStructure.js";

let node = data[0].pattern;
let node1 = data[2].pattern;
let node2 = data[1].pattern;
let tree = new BST(null);
tree.insert(node);
tree.insert(node1);
tree.insert(node2);
// tree.show()
let pattern = ["Hello", "World", "I", "am", "öylesine","test","deneme","burası","Burak", "Kagan"];
tree.traverse(pattern);
// Hello World I am Burak Ozkan
// Hello World I am Burak Kagan
// Hello World this is different zone