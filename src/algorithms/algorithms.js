import bubbleSort from './bubbleSort';
import insertionSort from './insertionSort';
import selectionSort from './selectionSort';
import quickSort from './quickSort';
import heapSort from './heapSort';
import radixSort from './radixSort';
import bucketSort from './bucketSort';
import shellSort from './shellSort';

const algorithms = [
  {name: 'Bubble Sort', key: 0, method: bubbleSort},
  {name: 'Insertion Sort', key: 1, method: insertionSort},
  {name: 'Selection Sort', key: 2, method: selectionSort},
  {name: 'Quick Sort', key: 3, method: quickSort},
  {name: 'Heap Sort', key: 4, method: heapSort},
  {name: 'Radix Sort', key: 5, method: radixSort},
  {name: 'Bucket Sort', key: 6, method: bucketSort},
  {name: 'Shell Sort', key: 7, method: shellSort},
]

export default algorithms;