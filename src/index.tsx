import { createRoot } from 'react-dom/client'
import { App } from './components/App/App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Shop} from "@/pages/shop";
import {Suspense} from "react";
import {About} from "@/pages/about";

const root = document.getElementById('root')

if (!root) {
	throw new Error('Root not found')
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: '/about',
				element: <Suspense fallback={'Loading...'}><About /></Suspense>
			},
			{
				path: '/shop',
				element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
			}
		]
	},
]);

const container = createRoot(root)
container.render(<RouterProvider router={router} />)
