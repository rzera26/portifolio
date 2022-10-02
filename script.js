hello = (params) => {
    alert('hello world')
}

setTimeout(async function () {
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}, 1000)
