'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const dsaTopics = [
  {
    id: 1,
    title: 'Arrays',
    description: 'A data structure consisting of a collection of elements, each identified by an array index.',
    details: 'Arrays are fundamental data structures that store elements of the same type in contiguous memory locations. They provide constant-time access to elements using their indices. Common operations include insertion, deletion, and traversal. Arrays are widely used in various algorithms and form the basis for more complex data structures.'
  },
  {
    id: 2,
    title: 'Linked Lists',
    description: 'A linear collection of data elements whose order is not given by their physical placement in memory.',
    details: 'Linked Lists consist of nodes, where each node contains data and a reference (or link) to the next node in the sequence. They allow for efficient insertion and deletion of elements, but do not provide constant-time access to individual elements. Linked Lists can be singly linked, doubly linked, or circular, each with its own advantages and use cases.'
  },
  {
    id: 3,
    title: 'Stacks',
    description: 'A Last-In-First-Out (LIFO) data structure.',
    details: 'Stacks follow the Last-In-First-Out (LIFO) principle, where the last element added is the first one to be removed. They support two main operations: push (add an element) and pop (remove the top element). Stacks are used in various algorithms, including depth-first search, expression evaluation, and function call management in programming languages.'
  },
  {
    id: 4,
    title: 'Queues',
    description: 'A First-In-First-Out (FIFO) data structure.',
    details: 'Queues follow the First-In-First-Out (FIFO) principle, where the first element added is the first one to be removed. They support two main operations: enqueue (add an element) and dequeue (remove the front element). Queues are used in breadth-first search, task scheduling, and buffer management in various applications.'
  },
  {
    id: 5,
    title: 'Trees',
    description: 'A hierarchical data structure consisting of nodes connected by edges.',
    details: 'Trees are non-linear data structures composed of nodes connected by edges. Each tree has a root node, and every node can have child nodes. Common types include binary trees, binary search trees, AVL trees, and B-trees. Trees are used in file systems, expression parsing, and efficient searching and sorting algorithms.'
  },
  {
    id: 6,
    title: 'Graphs',
    description: 'A non-linear data structure consisting of vertices and edges.',
    details: 'Graphs are versatile data structures consisting of vertices (nodes) connected by edges. They can be directed or undirected, weighted or unweighted. Graphs are used to represent networks, social connections, and various real-world relationships. Common algorithms include depth-first search, breadth-first search, Dijkstra\'s algorithm, and minimum spanning tree algorithms.'
  },
  {
    id: 7,
    title: 'Hash Tables',
    description: 'A data structure that implements an associative array abstract data type.',
    details: 'Hash Tables provide efficient key-value pair storage and retrieval. They use a hash function to compute an index for each key, allowing for constant-time average-case complexity for basic operations. Hash Tables are used in database indexing, caches, and implementing sets and maps in programming languages.'
  },
  {
    id: 8,
    title: 'Heaps',
    description: 'A specialized tree-based data structure that satisfies the heap property.',
    details: 'Heaps are complete binary trees that satisfy the heap property: for a max heap, each parent node is greater than or equal to its children; for a min heap, each parent is less than or equal to its children. Heaps are used to implement priority queues and in algorithms like heapsort and Dijkstra\'s algorithm for efficient element retrieval.'
  },
]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedTopic, setExpandedTopic] = useState(null)

  const filteredTopics = dsaTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">
        Data Structures and Algorithms Explorer
      </h1>
      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search DSA topics..."
            className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <AnimatePresence>
          {filteredTopics.map((topic) => (
            <motion.div
              key={topic.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={`cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  expandedTopic === topic.id ? 'bg-purple-100' : 'bg-white'
                }`}
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-purple-700">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <AnimatePresence>
                    {expandedTopic === topic.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm text-gray-700 mt-2">{topic.details}</p>
                        <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                          Learn More
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}