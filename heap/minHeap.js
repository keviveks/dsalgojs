/* Heap Data structure */

/*
  Binary Heap is an ordered binary tree
  Max Heap: the parent node is greater or equal to the child node
  Min Heap: the parent node will be lesser than the child nodes

  Binary Heaps are also a complete binary tree, the parent is fully filled, or if parcially filled.. it will be filled from left to right
  Heaps are more often implemented as Array


  left child: i * 2
  right child: i * 2 + 1
  parent: i / 2

  URL: https://www.cs.usfca.edu/~galles/visualization/Heap.html
*/

let MinHeap = function() {
  let heap = [null];

  this.insert = function(num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while(heap[idx] < heap[Math.floor(idx/2)]) {
        if (idx >= 1) {
          [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
          if (Math.floor(idx/2) > 1) {
            idx = Math.floor(idx/2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

	this.sort = function() {
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		};
		return result;
	};

  this.print = function() {
    console.log(heap);
  };
};

let minHeap = new MinHeap();
minHeap.insert(12);
minHeap.insert(6);
minHeap.insert(10);
minHeap.insert(9);
minHeap.insert(5);
minHeap.insert(1);
minHeap.print();
minHeap.remove();
minHeap.print();
