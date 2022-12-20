import React from 'react';

const Blog = () => {
    return (
        <section className="text-gray-800 py-24 ">
        <div className="container rounded-xl bg-base-200 flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Question About Programming </h2>
            <div className="divide-y divide-gray-300">
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-5">1 What are the different ways to manage a state in a React application?</h3>
                    <p className="md:pl-0 md:col-span-7">We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState. <br />
                    The Four Kinds of React State to Manage
                    1.Local state.
                    2.Global state.
                    3.Server state.
                    4.URL state.
                    More information manage state is the react state n js,!

                    </p>
                </div>
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-5">2 How does prototypical inheritance work?</h3>
                    <p className="md:pl-0 md:col-span-7">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-5">3 What is a unit test? Why should we write unit tests?</h3>
                    <p className="md:pl-0 md:col-span-7">A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                    <br />
                    <br />
                    They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
                </div>
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-5">4 React vs. Angular vs. Vue?</h3>
                    <p className="md:pl-0 md:col-span-7">React: It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks.
                    <br />
                    <br />

                    Angular: This topic can help you understand Angular: what Angular is, what advantages it provides, and what you might expect as you start to build your applications.
                    A component-based framework for building scalable web applications.
                    <br />
                    <br />

                    Vue: Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.
</p>
                </div>
             
                
            </div>
        </div>
    </section>
    );
};

export default Blog;