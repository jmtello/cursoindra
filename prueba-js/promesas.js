function msgAfterTimeout (msg, who, timeout) 
{
	return new Promise((resolve, reject) => 
    {
		setTimeout(	() => resolve(`${msg} Hello ${who}!`), timeout)
	})
}

msgAfterTimeout("", "promesa1", 4000)
.then((msg) => {
	console.log(`primera promesa:${msg}`)
})

msgAfterTimeout("", "Foo", 1000)
.then((msg) =>
	msgAfterTimeout(msg, "Bar", 200))
.then((msg) => {
	console.log(`done after 300ms:${msg}`)
})