# CMC_PROJECT

If you are not familiar with the process of handoff, strongly recommend checking out the handoff-visualizer. The visualizer visualize a tuned versoin of this simulation, which makes the process and concept easy to understand. The visualizer is built to make the concept understandable. We value the data in this simulation project.

This project is a side project of handoff-visualizer.


What is handoff?
Handoff is the transition for any given user of signal transmission from one base station to a geographically adjacent base station as the user moves around.

Each time a mobile or portable cellular subscriber passes from one cellinto another, the network automatically switches coverage responsibility from one basestation to another. Each base-station transition, as well as the switching processor sequence itself, is called handoff.

Usage
Idealy:
pipenv sync
pipenv run python src/handoff.py

Or if you already got the dependencies in the pipfile
python src/handoff.py



Policies parameter value
The different parameters for each policy are listed below.
Parameters	Value
Threshold	 => -110 dBm
Entrophy	=> 5 dBm
Minimum	=> -125 dBm



Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
