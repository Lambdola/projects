program hello
implicit none
character(10) :: name 
write(*,*) "What is your name ?"
read(*,*) name
write(*,*) "My name is ", name
end program hello
