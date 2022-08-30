export default function FormQ() {
    return (
        <div>
            <section className="relative pb-2">
                <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
                    <div className="py-5 md:py-30">
                        <h1 className="mb-5 text-5xl font-bold text-white">
                            Get a Quote!
                        </h1>
                        <div className="p-6">
                            <form>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="first-name">First name</label>
                                        <input type="text" id="first-name" name="name" className="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div className="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="last-name">Last name</label>
                                        <input type="text" id="last-name" name="last-name" className="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div className="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" className="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div className="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="organisation">Business size</label>
                                        <input type="text" id="last-name" name="last-name" className="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div className="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="services">Services</label>
                                        <input type="text" id="last-name" name="last-name" className="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                    <div className="flex flex-col mb-5 text-3xl text-gray-100">
                                        <label htmlFor="phone">
                                            <div className="flex justify-center">
                                                Phone
                                            </div>
                                        </label>
                                        <input type="tel" id="phone" name="phone" className="px-3 py-2 text-black rounded-md form-input" />
                                    </div>
                                    <div className="flex flex-col col-span-2 mb-5 text-3xl text-gray-100">
                                        <label htmlFor="subject">
                                            <div className="flex align-items">
                                                Additional Requests
                                                <span className="mb-2 ml-auto text-gray-100 opacity-75">Max. 500 characters</span>
                                            </div>
                                        </label>
                                        <textarea maxLength="500" rows="4" type="text" id="subject" name="subject" className="px-3 py-2 text-black rounded-md form-input" required />
                                    </div>
                                </div>
                                <div className="flex justify-end ">
                                    <button type="submit" className="inline-flex items-center py-3 mt-2 ml-2 text-xl font-medium text-black transition duration-500 ease-in-out transform bg-transparent bg-white border rounded-lg px-14 hover:bg-yellow-300">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
