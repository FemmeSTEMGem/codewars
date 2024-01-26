# Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
# Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
# Create a function which translates a given DNA string into RNA.
# For example:
# "GCAT"  =>  "GCAU"
# The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

def dna_to_rna(dna)
  dna.gsub('U', 'T')
end
# Easy peasy once I found/remembered .gsub()


# Create a function with two arguments that will return an array of the first n multiples of x.
# Assume both the given number and the number of times to count will be positive numbers greater than 0.
# Return the results as an array or list ( depending on language ).
# Examples
  # count_by(1,10) #should return [1,2,3,4,5,6,7,8,9,10]
  # count_by(2,5) #should return [2,4,6,8,10]

  def count_by(x, n)
    array = []
    iteration = 1
    while iteration < n + 1 do
      array.push(x*iteration)
      iteration += 1
    end
    return array
  end
  
  print count_by(1, 10)
  # I knew that I needed to use .map() somehow, but I just didn't have the brain for it. Here's the far better solutions, lol:
    # def count_by(x, n)
      # (1..n).map{|i| i*x}
    # end