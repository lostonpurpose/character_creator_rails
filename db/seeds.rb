puts "destroying the db..."
Character.destroy_all

puts "making new characters..."

Character.create(name: "Billy", age: 22, gender: "male", type: "ninja", race: "human")
Character.create(name: "Will", age: 45, gender: "male", type: "ranger", race: "human")
Character.create(name: "Ayaka", age: 35, gender: "female", type: "mage", race: "human")

puts "there are now #{Character.count} characters"
