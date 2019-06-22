const onReady = () => {
	const todo = new Vue({

		el: '#todo',

		data: {
			newValue: '',
			itemArray: [],
		},

		methods: {
			add() {
				this.itemArray.push({
					value: this.newValue,
					isComplete: false
				})

				this.newValue = ''
			},

			toggle(index) {
				this.itemArray[index].isComplete = !this.itemArray[index].isComplete;
			},

			remove(index) {
				this.itemArray.splice(index, 1)
			},
		},
	})
};
document.addEventListener('DOMContentLoaded', onReady)

