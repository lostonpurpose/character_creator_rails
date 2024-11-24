class Character < ApplicationRecord
  validates :name, presence: true
  validates :age, presence: true
  validates :type, presence: true
  validates :gender, presence: true
  validates :race, presence: true
end
