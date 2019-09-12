# Notes

## A good data model (basics) - Schema of the database

- Captures ALL the information the system needs
- Captures ONLY the information the system needs <---- Abstraction
- reflects reality (from the point of view of teh system)
- is flexible, can evolve with the system
- guarantees data integrity (no bad data will get into the database), without sacrificing performance. <---- using constraints (validation)
- id driven by the way we access the system


## Components (defining)

- entities (nouns: zoo, animal, species), like a resource --> tables
- properties --> columns or fields
- relationships (between the tables) --> Foreign Keys


## Workflow (opinion to start with until I come up with my own)
    --Bust out pen and paper or db visualization designer

- identify entities 
- identify properties 
- identify relationships 


## Relationships

- one to one: rare
- one to many: This is it! (many databases are a collection of one to many)
- many to many: a trick!! --> see requirements example *


## Mantras

- every table must have a Primary Key
- one to many relationship requires a Foreign Key
- The Foreign Key foes on the Many side
- many to many needs a third table
- the third table can have other information
- work on two or three entities at a time