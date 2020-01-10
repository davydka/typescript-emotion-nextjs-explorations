class Vehicle {
  // color: string

  constructor(public color: string) {
    // this.color = color
  }

  protected honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle{
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vrooom')
  }

  startDrivingProcess(): void {
    this.drive()
  }
}

const car = new Car(4, 'orange')
car.startDrivingProcess()
console.log(car.color)

