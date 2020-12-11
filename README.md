
# Just a simple to-do-list

Please be sure, that you have install Docker, before start

# Installation

## Linux

### 1. Change directory to that one, where you want to set the project.
for example:
```cd projects```

### Or make directory for project:
 ```cd```
 
```mkdir projects```

```cd projects```

### 2. Clone the repository:
```git clone https://github.com/StellarProcy/todolist.git```

### 3. Change directory:
```cd todolist```

### 4. Build the docker imdoliage via this command:
```docker build -t to-do-list:dev .```

### 5. Laucnh the docker container:
```docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3005:3000 -e CHOKIDAR_USEPOLLING=true to-do-list:dev```

### Note: if you want to change port - change 3005 on whatever you want.

### 6. Try the app by click on the link: 
http:\\localhost:3005 (or another port, if you chage it)
