puts "destroying the db..."
Character.destroy_all

puts "making new characters..."

Character.create(name: "Billy", age: 22, gender: "male", job: "ninja", race: "half-elf")
Character.create(name: "Will", age: 45, gender: "male", job: "ranger", race: "human")
Character.create(name: "Ayaka", age: 35, gender: "female", job: "mage", race: "human")

puts "there are now #{Character.count} characters"
