# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Artist.delete_all

Artist.create({
  name: "Lorenzo Ghiberti",
  age: 77,
  style: "Renaissance",
  image_url: "http://a4.files.biography.com/image/upload/c_fill,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NDg0MDU1MzkyNzE2MzAz.jpg"
  })
Artist.create({
  name: "Banksy",
  age: 41,
  style: "graffiti",
  image_url: "http://www.stencilrevolution.com/photopost/2012/09/Girl-with-a-Balloon-by-Banksy.jpg"
  })
Artist.create({
  name: "Philippe Petit",
  age: 65,
  style: "high-wire",
  image_url: "http://static2.businessinsider.com/image/53e38c63eab8ea162add5fcd-1200-924/philippe-petit-world-trade-center-tight-rope-walk-3.jpg"
  })
Artist.create({
  name: "Yoko Ono",
  age: 82,
  style:"avant-garde",
  image_url:"http://www.passionsmiths.com/admin/images/yoko-ono.jpg"
  })
Artist.create({
  name: "Paul Signac",
  age: 72,
  style: "neo-impressionism",
  image_url: "http://upload.wikimedia.org/wikipedia/commons/3/30/Seurat_Paul_Signac.jpg"
  })