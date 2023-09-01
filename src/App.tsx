import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model'
import TodoList from './components/TodoList'

let name: string
let age: number | string // 'UNION': can be either number or string
let isStudent: boolean
let hobbies: string[]
let role: [number, string] // will contain one number and one string

let printName: (name: string) => never

// function printName(name: string) {
// 	console.log(name)
// }

// printName('Hyungju')

let personName: unknown

// type Person = {
// 	name: string
// 	age?: number // now age is optional
// }
// // let person:  // not recommended. Use 'type' or 'intwerfece'
// let person: Person = {
// 	name: 'Hyungju',
// 	age: 56,
// }

// let lotsOfPeople: Person[]

// interface is the same as type "alias"
// interface Person {
// 	name: string
// 	age?: number // now age is optional
// }

// type X = Person & {
// 	a: string
// 	b: number
// }

// type X = {
// 	a: string
// 	b: number
// }

// interface Person extends X {
// 	name: string
// 	age?: number // now age is optional
// }

// interface Guy extends Person {
// 	profession: string
// }

// type X = {
// 	a: string
// 	b: number
// }

// type Y = X & {
// 	c: string
// 	d: number
// }

// let y: Y = {
// 	c: 'lol',
// 	d: 12,
// }

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('')
	const [todos, setTodos] = useState<Todo[]>([])

	console.log(todos)

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()
		if (todo) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					todo: todo,
					isDone: false,
				},
			])
			setTodo('')
		}
	}

	console.log('Todos:', todos)
	return (
		<div className='App'>
			<span className='heading'>Taskify</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	)
}

export default App
