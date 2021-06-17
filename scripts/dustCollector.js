let placeables = [Blocks.stone]
const DustCollector = extend(GenericCrafter, "dust-collector", {
canPlaceOn(tile, team){
  return placeables.includes(tile.floor());
  }
});
const water = Liquids.water;
DustCollector.buildType = () => extend(GenericCrafter.GenericCrafterBuild, DustCollector, {
    draw() {
        Draw.rect(DustCollector.region, this.x, this.y);
        Draw.color(water.color);
        Draw.alpha(this.liquids.get(water) / DustCollector.liquidCapacity);
	Draw.rect(Core.atlas.find(DustCollector.name + "-liquid"), this.x, this.y);
        Draw.color();
        Draw.rect(Core.atlas.find(DustCollector.name + "-rotator"),this.x, this.y, this.totalProgress * 2);
        Draw.rect(Core.atlas.find(DustCollector.name + "-top"), this.x, this.y);
	Draw.reset();
    }
});