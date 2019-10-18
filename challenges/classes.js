class CuboidMakerClass{
  constructor(atters){
    this.length = atters.length;
    this.width = atters.width;
    this.height = atters.height;
  }
}

class CuboidMakerVolume extends CuboidMakerClass{
  constructor(atters){
    super(atters);
  }
  volume(length, width, height){
    return length * width * height;
  }
}

class CuboidMakerSurfaceArea extends CuboidMakerClass{
  constructor(atters){
    super(atters);
  }
  surfaceArea(length, width, height){
    return 2 * (length * width + length * height + width * height);
  }
}

const cuboidClass = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboidClass.volume()); // 100
// console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.