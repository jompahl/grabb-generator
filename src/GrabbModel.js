export class GrabbModel {
    constructor(name, attributes) {
        this.name = name
        this.attributes = attributes
    }

    getTotal = () => {
        const total = this.attributes.reduce((total, attribute) => total + attribute.value, 0)
        return Math.round(total / this.attributes.length)
    }
}