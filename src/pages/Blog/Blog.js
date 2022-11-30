import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto my-40">
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                        <div>
                            <h3 className="font-semibold">What are the different ways to manage a state in a React application?</h3>
                            <p className="mt-1 text-gray-600">When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                            There are four main types of state you need to properly manage in your React apps:

                            1.Local state
                            2.Global state
                            3.Server state
                            4.URL state
                            Let's cover each of these in detail:

                            Local (UI) state – Local state is data we manage in one or another component.

                            Local state is most often managed in React using the useState hook.

                            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                            Global (UI) state – Global state is data we manage across multiple components.

                            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                            Sometimes state we think should be local might become global.

                            Server state – Data that comes from an external server that must be integrated with our UI state.

                            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                            Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                            URL state – Data that exists on our URLs, including the pathname and query parameters.

                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                            There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">How does prototypical inheritance work ?</h3>
                            <p className="mt-1 text-gray-600">JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not have static types.

                            When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain. It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.

                            While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented.

                            Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern. While classes abstract most of the prototypical mechanism away, understanding how prototypes work under the hood is still useful.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">What is a unit test? Why should we write unit tests?</h3>
                            <p className="mt-1 text-gray-600">Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                            Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                            Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                            <p className="mt-1 text-gray-600">What is Angular?

                            AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.

                            Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.
                            
                            What is React?

                            Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.

                            One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.

                            With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native.
                            
                            What is Vue?

                            Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.

                            Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.

                            Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>                                  
        </div>
    );
};

export default Blog;