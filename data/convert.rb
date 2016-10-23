require 'csv'
require 'json'

def process_population
  population_data = CSV.read('./population.csv')
  population      = {}

  42.times do |index|
    row = population_data[index + 1]
    id  = row[0].to_i

    years = {}

    29.times do |year_index|
      years_population = row[year_index + 15]

      years[year_index + 1992] = years_population
    end

    population[id] = years
  end

  population
end

def process_totals
  totals_data = CSV.read('./totals.csv')
  totals      = {}

  42.times do |index|
    row = totals_data[index + 2]
    id  = row[0].to_i

    years = {}

    17.times do |year_index|
      years_total = row[year_index + 2]

      years[year_index + 1999] = years_total
    end

    totals[id] = years
  end

  totals
end

population = process_population
totals     = process_totals

dataset = []

CSV.open('dataset.csv', 'w') do |csv|
  42.times do |index|
    id = index + 1

    county_population = population[id]
    county_totals     = totals[id]

    county_totals.each do |year, budget|
      row = [id, year, county_population[year].to_i, budget.to_i]

      csv << row

      dataset.push(row)
    end
  end
end

File.write(
  'dataset.js',
  "
  var dataset = #{dataset.to_json};\n
  module.exports = dataset;
  "
)
