'use strict'

const questions = [
        // Which of these players has been selected the most times for the All Star Game?
    {
        question: 'Which of these players has been selected the most times for the All Star Game?',
        answers: [
            {text: 'LeBron James', correct: true},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Kareem Abdul-Jabbar', correct: false},
            {text: 'Tim Duncan', correct: false}
        ]
    },
    {
        question: 'Which of these players has been selected the most times for the All Star Game?',
        answers: [
            {text: 'Chris Bosh', correct: true},
            {text: 'Paul Pierce', correct: false},
            {text: 'Ray Allen', correct: false},
            {text: 'Jason Kidd', correct: false}
        ]
    },
    {
        question: 'Which of these players has been selected the most times for the All Star Game?',
        answers: [
            {text: 'Kyrie Irving', correct: true},
            {text: 'Tracy McGrady', correct: false},
            {text: 'Scottie Pippen', correct: false},
            {text: 'Alonzo Mourning', correct: false}
        ]
    },
    {
        question: 'Which of these players has been selected the most times for the All Star Game?',
        answers: [
            {text: 'Joe Johnson', correct: true},
            {text: 'Pau Gasol', correct: false},
            {text: 'Kyle Lowry', correct: false},
            {text: 'Kevin Love', correct: false}
        ]
    },
    {
        question: 'Which of these players has been selected the most times for the All Star Game?',
        answers: [
            {text: 'Shawn Marion', correct: true},
            {text: 'Derrick Rose', correct: false},
            {text: 'Bradley Beal', correct: false},
            {text: 'Rudy Gobert', correct: false}
        ]
    },
    {
        question: 'Which of these players has been selected the most times for the All Star Game?',
        answers: [
            {text: 'Richard Hamilton', correct: true},
            {text: 'Manu Ginobili', correct: false},
            {text: 'Bill Walton', correct: false},
            {text: 'Dennis Rodman', correct: false}
        ]
    },
    {
        question: 'Which of these players has been selected the most times for the All Star Game?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: true},
            {text: 'Magic Johnson', correct: false},
            {text: 'Julius Erving', correct: false},
            {text: 'Allen Iverson', correct: false}
        ]
    },
    {
        question: 'Which of these players has been selected the most times for the All Star Game?',
        answers: [
            {text: 'Dirk Nowitzki', correct: true},
            {text: 'Wilt Chamberlain', correct: false},
            {text: 'Dwyane Wade', correct: false},
            {text: 'Hakeem Olajuwon', correct: false}
        ]
    },
    {
        question: 'Which of these players has been selected the most times for the All Star Game?',
        answers: [
            {text: 'Kevin Garnett', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Karl Malone', correct: false},
            {text: 'Jerry West', correct: false}
        ]
    },
    // Which of these players never played for TEAM?
    {
        question: 'Which of these players never played for the Los Angeles Lakers?',
        answers: [
            {text: 'Jason Kidd', correct: true},
            {text: 'Steve Nash', correct: false},
            {text: 'Isaiah Thomas', correct: false},
            {text: 'Marc Gasol', correct: false}
        ]
    },
    {
        question: 'Which of these players never played for the Cleveland Cavaliers?',
        answers: [
            {text: 'Dwight Howard', correct: true},
            {text: 'Dwyane Wade', correct: false},
            {text: 'Derrick Rose', correct: false},
            {text: 'Deron Williams', correct: false}
        ]
    },
    {
        question: 'Which of these players never played for the Charlotte Hornets?',
        answers: [
            {text: 'Russell Wetbrook', correct: true},
            {text: 'Jason Richardson', correct: false},
            {text: 'Tony Parker', correct: false},
            {text: 'Dwight Howard', correct: false}
        ]
    },
    {
        question: 'Which of these players never played for the Washington Wizards?',
        answers: [
            {text: 'Alonzo Mourning', correct: true},
            {text: 'Dwight Howard', correct: false},
            {text: 'Paul Pierce', correct: false},
            {text: 'Russell Westbrook', correct: false}
        ]
    },
    {
        question: 'Which of these players never played for the Toronto Raptors?',
        answers: [
            {text: 'Deron Williams', correct: true},
            {text: 'Jermaine O\'Neal', correct: false},
            {text: 'P.J. Tucker', correct: false},
            {text: 'Hakeem Olajuwon', correct: false}
        ]
    },
    {
        question: 'Which of these players never played for the Boston Celtics?',
        answers: [
            {text: 'Chris Webber', correct: true},
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Blake Griffin', correct: false},
            {text: 'Joe Johnson', correct: false}
        ]
    },
    {
        question: 'Which of these players never played for the Los Angeles Lakers?',
        answers: [
            {text: 'Chris Bosh', correct: true},
            {text: 'Brook Lopez', correct: false},
            {text: 'Gary Payton', correct: false},
            {text: 'Dennis Rodman', correct: false}
        ]
    },
    {
        question: 'Which of these players never played for the Los Angeles Clippers?',
        answers: [
            {text: 'Peja Stojakovic', correct: true},
            {text: 'Antawn Jamison', correct: false},
            {text: 'Lamar Odom', correct: false},
            {text: 'Chauncey Billups', correct: false}
        ]
    },
    {
        question: 'Which of these players never played for the Los Angeles Clippers?',
        answers: [
            {text: 'Jeremy Lin', correct: true},
            {text: 'Danny Granger', correct: false},
            {text: 'Nate Robinson', correct: false},
            {text: 'Tobias Harris', correct: false}
        ]
    },
    // Which of these players played for the TEAM?
    {
        question: 'Which of these players played for the Los Angeles Lakers?',
        answers: [
            {text: 'Carlos Boozer', correct: true},
            {text: 'Chris Paul', correct: false},
            {text: 'John Wall', correct: false},
            {text: 'Stephon Marbury', correct: false}
        ]
    },
    {
        question: 'Which of these players played for the Detroit Pistons?',
        answers: [
            {text: 'Derrick Rose', correct: true},
            {text: 'Ray Allen', correct: false},
            {text: 'Ben Simmons', correct: false},
            {text: 'LaMarcus Aldridge', correct: false}
        ]
    },
    {
        question: 'Which of these players played for the New York Knicks?',
        answers: [
            {text: 'Jason Kidd', correct: true},
            {text: 'Kevin Garnett', correct: false},
            {text: 'DeMarcus Cousins', correct: false},
            {text: 'Russell Westbrook', correct: false}
        ]
    },
    {
        question: 'Which of these players played for the Chicago Bulls?',
        answers: [
            {text: 'Ron Artest', correct: true},
            {text: 'Gilbert Arenas', correct: false},
            {text: 'Tony Parker', correct: false},
            {text: 'LaMarcus Aldridge', correct: false}
        ]
    },
    {
        question: 'Which of these players played for the Orlando Magic?',
        answers: [
            {text: 'Patrick Ewing', correct: true},
            {text: 'Gary Payton', correct: false},
            {text: 'Dennis Rodman', correct: false},
            {text: 'Hakeem Olajuwon', correct: false}
        ]
    },
    // Which of these players scored the most points in Regular Season in his career?
    {
        question: 'Which of these players scored the most points in Regular Season in his career?',
        answers: [
            {text: 'Kareem Abdul-Jabbar', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Karl Malone', correct: false}
        ]
    },
    {
        question: 'Which of these players scored the most points in Regular Season in his career?',
        answers: [
            {text: 'Dirk Nowitzki', correct: true},
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Carmelo Anthony', correct: false},
            {text: 'Wilt Chamberlain', correct: false}
        ]
    },
    {
        question: 'Which of these players scored the most points in Regular Season in his career?',
        answers: [
            {text: 'Carmelo Anthony', correct: true},
            {text: 'Tim Duncan', correct: false},
            {text: 'Kevin Garnett', correct: false},
            {text: 'Patrick Ewing', correct: false}
        ]
    },
    {
        question: 'Which of these players scored the most points in Regular Season in his career?',
        answers: [
            {text: 'Vince Carter', correct: true},
            {text: 'Charles Barkley', correct: false},
            {text: 'Dwyane Wade', correct: false},
            {text: 'Allen Iverson', correct: false}
        ]
    },
    {
        question: 'Which of these players scored the most points in Regular Season in his career?',
        answers: [
            {text: 'Pau Gasol', correct: true},
            {text: 'Manu Ginobili', correct: false},
            {text: 'Tony Parker', correct: false},
            {text: 'Steve Nash', correct: false}
        ]
    },
    {
        question: 'Which of these players scored the most points in Regular Season in his career?',
        answers: [
            {text: 'Ray Allen', correct: true},
            {text: 'Larry Bird', correct: false},
            {text: 'Allen Iverson', correct: false},
            {text: 'David Robinson', correct: false}
        ]
    },
    // Which of these players has never played the All Star Game?
    {
        question: 'Which of these players has never played the All Star Game?',
        answers: [
            {text: 'Lamar Odom', correct: true},
            {text: 'Kyle Korver', correct: false},
            {text: 'Jarrett Allen', correct: false},
            {text: 'Goran Dragic', correct: false}
        ]
    },
    {
        question: 'Which of these players has never played the All Star Game?',
        answers: [
            {text: 'Mike Bibby', correct: true},
            {text: 'DeAndre Jordan', correct: false},
            {text: 'Andre Iguodala', correct: false},
            {text: 'Devin Harris', correct: false}
        ]
    },
    {
        question: 'Which of these players has never played the All Star Game?',
        answers: [
            {text: 'Drazen Petrovic', correct: true},
            {text: 'Jameer Nelson', correct: false},
            {text: 'D\'Angelo Russell', correct: false},
            {text: 'Chris Kaman', correct: false}
        ]
    },
    {
        question: 'Which of these players has never played the All Star Game?',
        answers: [
            {text: 'Arvydas Sabonis', correct: true},
            {text: 'Ron Artest', correct: false},
            {text: 'Caron Butler', correct: false},
            {text: 'Mo Williams', correct: false}
        ]
    },
    {
        question: 'Which of these players has never played the All Star Game?',
        answers: [
            {text: 'Jamal Crawford', correct: true},
            {text: 'Stephon Marbury', correct: false},
            {text: 'Baron Davis', correct: false},
            {text: 'Luol Deng', correct: false}
        ]
    },
    {
        question: 'Which of these players has never played the All Star Game?',
        answers: [
            {text: 'Jason Terry', correct: true},
            {text: 'Tyson Chandler', correct: false},
            {text: 'Joakim Noah', correct: false},
            {text: 'Andrei Kirilenko', correct: false}
        ]
    },
    // How many NBA Championships did PLAYER win throughout his career?
    {
        question: 'How many NBA Championships did Dirk Nowitzki win throughout his career?',
        answers: [
            {text: 0, correct: false},
            {text: 1, correct: true},
            {text: 2, correct: false},
            {text: 3, correct: false}
        ]
    },
    {
        question: 'How many NBA Championships did Michael Jordan win throughout his career?',
        answers: [
            {text: 5, correct: false},
            {text: 6, correct: true},
            {text: 7, correct: false},
            {text: 8, correct: false}
        ]
    },
    {
        question: 'How many NBA Championships did Kobe Bryant win throughout his career?',
        answers: [
            {text: 5, correct: true},
            {text: 6, correct: false},
            {text: 7, correct: false},
            {text: 8, correct: false}
        ]
    },
    {
        question: 'How many NBA Championships did Dwyane Wade win throughout his career?',
        answers: [
            {text: 1, correct: false},
            {text: 2, correct: false},
            {text: 3, correct: true},
            {text: 4, correct: false}
        ]
    },
    {
        question: 'How many NBA Championships did Pau Gasol win throughout his career?',
        answers: [
            {text: 4, correct: false},
            {text: 2, correct: true},
            {text: 1, correct: false},
            {text: 3, correct: false}
        ]
    },
    {
        question: 'How many NBA Championships did Tim Duncan win throughout his career?',
        answers: [
            {text: 3, correct: false},
            {text: 5, correct: true},
            {text: 4, correct: false},
            {text: 6, correct: false}
        ]
    },
    {
        question: 'How many NBA Championships did Allen Iverson win throughout his career?',
        answers: [
            {text: 1, correct: false},
            {text: 0, correct: true},
            {text: 2, correct: false},
            {text: 3, correct: false}
        ]
    },
    {
        question: 'How many NBA Championships did Shaquille O\'Neal win throughout his career?',
        answers: [
            {text: 3, correct: false},
            {text: 4, correct: true},
            {text: 2, correct: false},
            {text: 5, correct: false}
        ]
    },
    {
        question: 'How many NBA Championships did Magic Johnson win throughout his career?',
        answers: [
            {text: 2, correct: false},
            {text: 5, correct: true},
            {text: 4, correct: false},
            {text: 3, correct: false}
        ]
    },
    {
        question: 'How many NBA Championships did Hakeem Olajuwon win throughout his career?',
        answers: [
            {text: 1, correct: false},
            {text: 2, correct: true},
            {text: 4, correct: false},
            {text: 3, correct: false}
        ]
    },
    // In which of these teams did PLAYER never play?
    {
        question: 'In which of these teams did Tracy McGrady never play?',
        answers: [
            {text: 'San Antonio Spurs', correct: false},
            {text: 'New York Knicks', correct: false},
            {text: 'Philadelphia 76ers', correct: true},
            {text: 'Toronto Raptors', correct: false}
        ]
    },
    {
        question: 'In which of these teams did Allen Iverson never play?',
        answers: [
            {text: 'Houston Rockets', correct: true},
            {text: 'Denver Nuggets', correct: false},
            {text: 'Memphis Grizzlies', correct: false},
            {text: 'Detroit Pistons', correct: false}
        ]
    },
    {
        question: 'In which of these teams did Chris Paul never play?',
        answers: [
            {text: 'Houston Rockets', correct: false},
            {text: 'Philadelphia 76ers', correct: true},
            {text: 'New Orleans Hornets', correct: false},
            {text: 'Phoenix Suns', correct: false}
        ]
    },
    {
        question: 'In which of these teams did Blake Griffin never play?',
        answers: [
            {text: 'Detroit Pistons', correct: false},
            {text: 'Atlanta Hawks', correct: true},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'Boston Celtics', correct: false}
        ]
    },
    {
        question: 'In which of these teams did Carmelo Anthony never play?',
        answers: [
            {text: 'Miami Heat', correct: true},
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'Houston Rockets', correct: false},
            {text: 'Oklahoma City Thunder', correct: false}
        ]
    },
    {
        question: 'In which of these teams did Jimmy Butler never play?',
        answers: [
            {text: 'Denver Nuggets', correct: true},
            {text: 'Chicago Bulls', correct: false},
            {text: 'Philadelphia 76ers', correct: false},
            {text: 'Minnesota Timberwolves', correct: false}
        ]
    },
    {
        question: 'In which of these teams did Kyrie Irving never play?',
        answers: [
            {text: 'Los Angeles Lakers', correct: true},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'Dallas Mavericks', correct: false},
            {text: 'Boston Celtics', correct: false}
        ]
    },
    {
        question: 'In which of these teams did Kevin Garnett never play?',
        answers: [
            {text: 'Washington Wizards', correct: true},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'Minnesota Timberwolves', correct: false},
            {text: 'Boston Celtics', correct: false}
        ]
    },
    {
        question: 'In which of these teams did James Harden never play?',
        answers: [
            {text: 'New York Knicks', correct: true},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'Philadelphia 76ers', correct: false},
            {text: 'Oklahoma City Thunder', correct: false}
        ]
    },
    // ¿Cuál de estos equipos seleccionó a JUGADOR en el Draft de la NBA?
    {
        question: 'Which of these teams selected Luka Doncic in the NBA Draft?',
        answers: [
            {text: 'Dallas Mavericks', correct: false},
            {text: 'Detroit Pistons', correct: false},
            {text: 'Indiana Pacers', correct: false},
            {text: 'Atlanta Hawks', correct: true}
        ]
    },
    {
        question: 'Which of these teams selected Kobe Bryant in the NBA Draft?',
        answers: [
            {text: 'Boston Celtics', correct: false},
            {text: 'New Jersey Nets', correct: false},
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'Charlotte Hornets', correct: true}
        ]
    },
    {
        question: 'Which of these teams selected Kawhi Leonard in the NBA Draft?',
        answers: [
            {text: 'Utah Jazz', correct: false},
            {text: 'Los Angeles Clippers', correct: false},
            {text: 'San Antonio Spurs', correct: false},
            {text: 'Indiana Pacers', correct: true}
        ]
    },
    // Which of these players never won a Defensive Player of the Year Award?
    {
        question: 'Which of these players never won a Defensive Player of the Year Award?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: true},
            {text: 'Marc Gasol', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Joakim Noah', correct: false}
        ]
    },
    {
        question: 'Which of these players never won a Defensive Player of the Year Award?',
        answers: [
            {text: 'Tim Duncan', correct: true},
            {text: 'Marcus Smart', correct: false},
            {text: 'Giannis Antetokounmpo', correct: false},
            {text: 'Kawhi Leonard', correct: false}
        ]
    },
    {
        question: 'Which of these players never won a Defensive Player of the Year Award?',
        answers: [
            {text: 'Anthony Davis', correct: true},
            {text: 'Ron Artest', correct: false},
            {text: 'Draymond Green', correct: false},
            {text: 'Tyson Chandler', correct: false}
        ]
    },
    // ¿A cuál de estos jugadores se le conoce también como APODO?
    {
        question: 'Which of these players is also known as "Flash"?',
        answers: [
            {text: 'Aaron Gordon', correct: false},
            {text: 'De\'Aaron Fox', correct: false},
            {text: 'Dwyane Wade', correct: true},
            {text: 'John Wall', correct: false}
        ]
    },
    {
        question: 'Which of these players is also known as "The Answer"?',
        answers: [
            {text: 'Vince Carter', correct: false},
            {text: 'DeMarcus Cousins', correct: false},
            {text: 'Allen Iverson', correct: true},
            {text: 'Paul Pierce', correct: false}
        ]
    },
    {
        question: 'Which of these players is also known as "The Truth"?',
        answers: [
            {text: 'Tim Duncan', correct: false},
            {text: 'Jamal Crawford', correct: false},
            {text: 'Allen Iverson', correct: false},
            {text: 'Paul Pierce', correct: true}
        ]
    },
    {
        question: 'Which of these players is also known as "White Chocolate"?',
        answers: [
            {text: 'Jason Kidd', correct: false},
            {text: 'Steve Nash', correct: false},
            {text: 'Larry Bird', correct: false},
            {text: 'Jason Williams', correct: true}
        ]
    },
    {
        question: 'Which of these players is also known as "The Matrix"?',
        answers: [
            {text: 'Tim Duncan', correct: false},
            {text: 'Dwight Howard', correct: false},
            {text: 'Vince Carter', correct: false},
            {text: 'Shawn Marion', correct: true}
        ]
    },
    {
        question: 'Which of these players is also known as "The Dream"?',
        answers: [
            {text: 'Tim Duncan', correct: false},
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Kareem Abdul-Jabbar', correct: false},
            {text: 'Hakeem Olajuwon', correct: true}
        ]
    },
    {
        question: 'Which of these players is also known as "Boogie"?',
        answers: [
            {text: 'Dennis Rodman', correct: false},
            {text: 'Jose Alvarado', correct: false},
            {text: 'Russell Westbrook', correct: false},
            {text: 'DeMarcus Cousins', correct: true}
        ]
    },
    // How many Regular Season MVP awards did PLAYER win?
    {
        question: 'How many Regular Season MVP awards did Kobe Bryant win?',
        answers: [
            {text: 1, correct: true},
            {text: 2, correct: false},
            {text: 3, correct: false},
            {text: 4, correct: false}
        ]
    },
    {
        question: 'How many Regular Season MVP awards did Michael Jordan win?',
        answers: [
            {text: 7, correct: false},
            {text: 4, correct: false},
            {text: 5, correct: true},
            {text: 6, correct: false}
        ]
    },
    {
        question: 'How many Regular Season MVP awards did LeBron James win?',
        answers: [
            {text: 3, correct: false},
            {text: 4, correct: true},
            {text: 5, correct: false},
            {text: 6, correct: false}
        ]
    },
    {
        question: 'How many Regular Season MVP awards did Stephen Curry win?',
        answers: [
            {text: 1, correct: false},
            {text: 2, correct: true},
            {text: 3, correct: false},
            {text: 4, correct: false}
        ]
    },
    {
        question: 'How many Regular Season MVP awards did Magic Johnson win?',
        answers: [
            {text: 5, correct: false},
            {text: 2, correct: false},
            {text: 3, correct: true},
            {text: 4, correct: false}
        ]
    },
    {
        question: 'How many Regular Season MVP awards did John Stockton win?',
        answers: [
            {text: 1, correct: false},
            {text: 2, correct: false},
            {text: 0, correct: true},
            {text: 3, correct: false}
        ]
    },
    // Which of these players has never won an NBA Finals MVP award?
    {
        question: 'Which of these players has never won an NBA Finals MVP award?',
        answers: [
            {text: 'Andre Iguodala', correct: false},
            {text: 'Scottie Pippen', correct: true},
            {text: 'Tony Parker', correct: false},
            {text: 'Chauncey Billups', correct: false}
    ]
    },
    {
        question: 'Which of these players has never won an NBA Finals MVP award?',
        answers: [
            {text: 'Paul Pierce', correct: false},
            {text: 'Clyde Drexler', correct: true},
            {text: 'Dwyane Wade', correct: false},
            {text: 'Isiah Thomas', correct: false}
    ]
    },
    // How many NBA Finals MVP awards did PLAYER win?
    {
        question: 'How many NBA Finals MVP awards did Kevin Durant win?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: 'How many NBA Finals MVP awards did Kobe Bryant win?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: 'How many NBA Finals MVP awards did Dwyane Wade win?',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '0', correct: false}
        ]
    },
    {
        question: 'How many NBA Finals MVP awards did LeBron James win?',
        answers: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: true},
            {text: '5', correct: false}
        ]
    },
    {
        question: 'How many NBA Finals MVP awards did Tim Duncan win?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: true},
            {text: '0', correct: false}
        ]
    },
    {
        question: 'How many NBA Finals MVP awards did Michael Jordan win?',
        answers: [
            {text: '4', correct: false},
            {text: '5', correct: false},
            {text: '6', correct: true},
            {text: '7', correct: false}
        ]
    },
    {
        question: 'How many NBA Finals MVP awards did Kawhi Leonard win?',
        answers: [
            {text: '0', correct: false},
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false}
        ]
    },
    {
        question: 'How many NBA Finals MVP awards did Stephen Curry win?',
        answers: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '1', correct: true},
            {text: '4', correct: false}
        ]
    },
    // Which of these franchises has not yet won an NBA Championship?
    {
        question: 'Which of these franchises has not yet won an NBA Championship?',
        answers: [
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'Minnesota Timberwolves', correct: true},
            {text: 'Dallas Mavericks', correct: false},
            {text: 'Washington Wizards', correct: false}
        ]
    },
    {
        question: 'Which of these franchises has not yet won an NBA Championship?',
        answers: [
            {text: 'Detroit Pistons', correct: false},
            {text: 'Los Angeles Clippers', correct: true},
            {text: 'Toronto Raptors', correct: false},
            {text: 'New York Knicks', correct: false}
        ]
    },
    // In which of these countries was former player PLAYER born?
    {
        question: 'In which of these countries was former player Steve Nash born?',
        answers: [
            {text: 'Canada', correct: false},
            {text: 'South Africa', correct: true},
            {text: 'United States', correct: false},
            {text: 'United Kingdom', correct: false}
        ]
    },
    {
        question: 'In which of these countries was former player Goran Dragic born?',
        answers: [
            {text: 'Serbia', correct: false},
            {text: 'Slovenia', correct: true},
            {text: 'Croatia', correct: false},
            {text: 'Lithuania', correct: false}
        ]
    },
    {
        question: 'In which of these countries was former player Marcin Gortat born?',
        answers: [
            {text: 'Germany', correct: false},
            {text: 'Poland', correct: true},
            {text: 'Russia', correct: false},
            {text: 'Ukraine', correct: false}
        ]
    },
    {
        question: 'In which of these countries was former player Andrew Bogut born?',
        answers: [
            {text: 'Germany', correct: false},
            {text: 'Australia', correct: true},
            {text: 'United Kingdom', correct: false},
            {text: 'Canada', correct: false}
        ]
    },
    {
        question: 'In which of these countries was Steven Adams born?',
        answers: [
            {text: 'Irland', correct: false},
            {text: 'New Zeland', correct: true},
            {text: 'Australia', correct: false},
            {text: 'United Kingdom', correct: false}
        ]
    },
    {
        question: 'In which of these countries was Joel Embiid born?',
        answers: [
            {text: 'Francia', correct: false},
            {text: 'Cameroon', correct: true},
            {text: 'United States', correct: false},
            {text: 'Nigeria', correct: false}
        ]
    },
    // Which of these players does not have COUNTRY nationality???
    {
        question: 'Which of these players does not have Dominican nationality?',
        answers: [
            {text: 'Karl Anthony-Towns', correct: false},
            {text: 'Carlos Arroyo', correct: true},
            {text: 'Al Horford', correct: false},
            {text: 'Chris Duarte', correct: false}
        ]
    },
    {
        question: 'Which of these players does not have Spanish nationality?',
        answers: [
            {text: 'José Calderón', correct: false},
            {text: 'José Juan Barea', correct: true},
            {text: 'Ricky Rubio', correct: false},
            {text: 'Marc Gasol', correct: false}
        ]
    },
    {
        question: 'Which of these players does not have French nationality?',
        answers: [
            {text: 'Joakim Noah', correct: false},
            {text: 'Luol Deng', correct: true},
            {text: 'Nicolas Batum', correct: false},
            {text: 'Boris Diaw', correct: false}
        ]
    },
    {
        question: 'Which of these players does not have Argentinian nationality?',
        answers: [
            {text: 'Luis Scola', correct: false},
            {text: 'Willy Hernangomez', correct: true},
            {text: 'Andres Nocioni', correct: false},
            {text: 'Fabricio Oberto', correct: false}
        ]
    },
    // Who was the coach of the TEAM in the Championship won in YEAR??
    {
        question: 'Who was the coach of the Cleveland Cavaliers in the Championship won in 2016?',
        answers: [
            {text: 'Tyronn Lue', correct: true},
            {text: 'David Blatt', correct: false},
            {text: 'Mike Brown', correct: false},
            {text: 'J.B. Bickerstaff', correct: false}
        ]
    },
    {
        question: 'Who was the coach of the Boston Celtics in the Championship won in 2008?',
        answers: [
            {text: 'Doc Rivers', correct: true},
            {text: 'Larry Bird', correct: false},
            {text: 'Danny Ainge', correct: false},
            {text: 'Brad Stevens', correct: false}
        ]
    },
    // Which of these players did not win the Rookie of the Year award?
    {
        question: 'Which of these players did not win the Rookie of the Year award?',
        answers: [
            {text: 'Pau Gasol', correct: false},
            {text: 'Allen Iverson', correct: false},
            {text: 'Blake Griffin', correct: false},
            {text: 'Kobe Bryant', correct: true}
        ]
    },
    {
        question: 'Which of these players did not win the Rookie of the Year award?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Luka Dončić', correct: false},
            {text: 'Kyrie Irving', correct: false},
            {text: 'Dwight Howard', correct: true}
        ]
    },
    // Which of these players did not win any NBA Championships?
    {
        question: 'Which of these players did not win any NBA Championships?',
        answers: [
            {text: 'Charles Barkley', correct: true},
            {text: 'Jason Kidd', correct: false},
            {text: 'Marc Gasol', correct: false},
            {text: 'Jason Williams', correct: false}
        ]
    },
    {
        question: 'Which of these players did not win any NBA Championships?',
        answers: [
            {text: 'Chris Paul', correct: true},
            {text: 'Gary Payton', correct: false},
            {text: 'Isiah Thomas', correct: false},
            {text: 'Dwight Howard', correct: false}
        ]
    },
    // How many times was the PLAYER the leading scorer of the Regular Season?
    {
        question: 'How many times was Carmelo Anthony the leading scorer of the Regular Season?',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: 'How many times was LeBron James the leading scorer of the Regular Season?',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: 'How many times was Kobe Bryant the leading scorer of the Regular Season?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: 'How many times was Michael Jordan the leading scorer of the Regular Season?',
        answers: [
            {text: '9', correct: false},
            {text: '10', correct: true},
            {text: '8', correct: false},
            {text: '11', correct: false}
        ]
    },
    {
        question: 'How many times was Michael Allen Iverson the leading scorer of the Regular Season?',
        answers: [
            {text: '1', correct: false},
            {text: '4', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false}
        ]
    },
    // What was the maximum number of points scored in a game by PLAYER?
    {
        question: 'What was the maximum number of points scored in a game by Michael Jordan?',
        answers: [
            {text: '58', correct: false},
            {text: '84', correct: false},
            {text: '72', correct: false},
            {text: '69', correct: true}
        ]
    },
    {
        question: 'What was the maximum number of points scored in a game by LeBron James?',
        answers: [
            {text: '68', correct: false},
            {text: '66', correct: false},
            {text: '72', correct: false},
            {text: '61', correct: true}
        ]
    },
    // What was the last team in PLAYER's career?
    {
        question: 'What was the last team in Manu Ginobili\'s career?',
        answers: [
            {text: 'Philadelphia 76ers', correct: false},
            {text: 'Charlotte Hornets', correct: false},
            {text: 'San Antonio Spurs', correct: true},
            {text: 'Miami Heat', correct: false}
        ]
    },
    {
        question: 'What was the last team in Paul Pierce\'s career?',
        answers: [
            {text: 'Boston Celtics', correct: false},
            {text: 'Washington Wizards', correct: false},
            {text: 'Los Angeles Clippers', correct: true},
            {text: 'Brooklyn Nets', correct: false}
        ]
    },
    {
        question: 'What was the last team in Karl Malone\'s career?',
        answers: [
            {text: 'Utah Jazz', correct: false},
            {text: 'New York Knicks', correct: false},
            {text: 'Los Angeles Lakers', correct: true},
            {text: 'Orlando Magic', correct: false}
        ]
    },
    {
        question: 'What was the last team in Vince Carter\'s career?',
        answers: [
            {text: 'Toronto Raptors', correct: false},
            {text: 'Sacramento Kings', correct: false},
            {text: 'Atlanta Hawks', correct: true},
            {text: 'Phoenix Suns', correct: false}
        ]
    },
    {
        question: 'What was the last team in Michael Jordan\'s career?',
        answers: [
            {text: 'Chicago Bulls', correct: false},
            {text: 'Charlotte Hornets', correct: false},
            {text: 'Washington Wizards', correct: true},
            {text: 'New York Knicks', correct: false}
        ]
    },
    {
        question: 'What was the last team in Shaquille O\'Neal\'s career?',
        answers: [
            {text: 'Orlando Magic', correct: false},
            {text: 'Cleveland Cavaliers', correct: false},
            {text: 'Boston Celtics', correct: true},
            {text: 'Phoenix Suns', correct: false}
        ]
    },
    // Which of these players won the most NBA Championships?
    {
        question: 'Which of these players won the most NBA Championships?',
        answers: [
            {text: 'Kyle Lowry', correct: false},
            {text: 'Kevin Garnett', correct: false},
            {text: 'Ray Allen', correct: true},
            {text: 'Jason Kidd', correct: false}
        ]
    },
    {
        question: 'Which of these players won the most NBA Championships?',
        answers: [
            {text: 'Dwyane Wade', correct: false},
            {text: 'Pau Gasol', correct: false},
            {text: 'Derek Fisher', correct: true},
            {text: 'Klay Thompson', correct: false}
        ]
    },
    {
        question: 'Which of these players won the most NBA Championships?',
        answers: [
            {text: 'Kobe Bryant', correct: false},
            {text: 'LeBron James', correct: false},
            {text: 'Scottie Pippen', correct: true},
            {text: 'Tim Duncan', correct: false}
        ]
    },
    {
        question: 'Which of these players won the most NBA Championships?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Stephen Curry', correct: false},
            {text: 'Tim Duncan', correct: true},
            {text: 'LeBron James', correct: false}
        ]
    },
    // OTHERS
    {
        question: 'Which of these names corresponds to the NBA Championship trophy?',
        answers: [
            {text: 'Walter Kenney Championship Trophy', correct: false},
            {text: 'Oscar Robertson Championship Trophy', correct: false},
            {text: 'Larry O\'Brien Championship Trophy', correct: true},
            {text: 'Bob Cousy Championship Trophy', correct: false}
        ]
    },
    {
        question: 'Which of these names corresponds to the inventor of basketball?',
        answers: [
            {text: 'James Naismith', correct: true},
            {text: 'Larry O\'Brien', correct: false},
            {text: 'Maurice Podoloff', correct: false},
            {text: 'Phil Jackson', correct: false}
        ]
    },
    {
        question: 'In which city was the "Bubble" that allowed the NBA\'s 19/20 season to finish?',
        answers: [
            {text: 'Los Angeles', correct: false},
            {text: 'New York', correct: false},
            {text: 'Miami', correct: false},
            {text: 'Orlando', correct: true}
        ]
    },
    {
        question: 'Against which team did Kobe Bryant score 81 points, breaking his personal record?',
        answers: [
            {text: 'Toronto Raptors', correct: true},
            {text: 'Boston Celtics', correct: false},
            {text: 'Utah Jazz', correct: false},
            {text: 'Portland Trail Blazers', correct: false}
        ]
    },
    {
        question: 'With which of these brands did Allen Iverson sign a lifetime contract?',
        answers: [
            {text: 'Nike', correct: false},
            {text: 'Reebok', correct: true},
            {text: 'Adidas', correct: false},
            {text: 'Converse', correct: false}
        ]
    },
    {
        question: 'Who was the commissioner of the NBA from 1984 to 2014?',
        answers: [
            {text: 'Adam Silver', correct: false},
            {text: 'Bill Russell', correct: false},
            {text: 'Larry O\'Brien', correct: false},
            {text: 'David Stern', correct: true}
        ]
    },
    {
        question: 'In which of these cities did the Grizzlies franchise start playing?',
        answers: [
            {text: 'Buffalo', correct: false},
            {text: 'Seattle', correct: false},
            {text: 'Vancouver', correct: true},
            {text: 'Rochester', correct: false}
        ]
    },
    {
        question: 'Which of these teams won the first NBA championship?',
        answers: [
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'Philadelphia Warriors', correct: true},
            {text: 'Boston Celtics', correct: false},
            {text: 'Chicago Bulls', correct: false}
        ]
    },
    {
        question: 'What is Kobe Bryant\'s full name?',
        answers: [
            {text: 'Kobe Jeffrey Bryant', correct: false},
            {text: 'Kobe Bean Bryant', correct: true},
            {text: 'Kobe Guido Bryant', correct: false},
            {text: 'Kobe Vince Bryant', correct: false}
        ]
    },
    {
        question: 'Who was the shortest player to win the NBA Slam Dunk Contest?',
        answers: [
            {text: 'Nate Robinson (5\' 9" - 1.75cm)', correct: false},
            {text: 'Spud Webb (5\' 6" - 1.68cm)', correct: true},
            {text: 'Muggsy Bogues (5\' 3" - 1.60cm)', correct: false},
            {text: 'Earl Boykins (5\' 5" - 1.65cm)', correct: false}
        ]
    },
    {
        question: 'Which of these players never won the NBA Slam Dunk Contest?',
        answers: [
            {text: 'Kobe Bryant', correct: false},
            {text: 'Aaron Gordon', correct: true},
            {text: 'John Wall', correct: false},
            {text: 'Derrick Rose', correct: false}
        ]
    },
    {
        question: 'Which of these players did not win the NBA Slam Dunk Contest twice?',
        answers: [
            {text: 'Michael Jordan', correct: false},
            {text: 'Blake Griffin', correct: true},
            {text: 'Zach Lavine', correct: false},
            {text: 'Jason Richardson', correct: false}
        ]
    },
    {
        question: 'Which of these players changed his name to "Metta World Peace"?',
        answers: [
            {text: 'Ron Artest', correct: true},
            {text: 'Kareem Abdul-Jabbar', correct: false},
            {text: 'Ron Harper', correct: false},
            {text: 'Dennis Rodman', correct: false}
        ]
    },
    {
        question: 'What is the height of the NBA rim?',
        answers: [
            {text: '10\' - 305cm', correct: true},
            {text: '9\'8" - 300cm', correct: false},
            {text: '9\'7" - 295cm', correct: false},
            {text: '9\'5" - 290cm', correct: false}
        ]
    },
    {
        question: 'What is the distance from the 3-point line to the rim in the NBA?',
        answers: [
            {text: '23\'9" - 724cm', correct: true},
            {text: '24\' - 732cm', correct: false},
            {text: '23\'6" - 716cm', correct: false},
            {text: '23\'3" - 708cm', correct: false}
        ]
    },
    {
        question: 'Who was the player with the most three-pointers scored before Stephen Curry overtook him?',
        answers: [
            {text: 'Ray Allen', correct: true},
            {text: 'Dirk Nowitzki', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Reggie Miller', correct: false}
        ]
    },
    {
        question: 'What other sport did Michael Jordan play professionally?',
        answers: [
            {text: 'Baseball', correct: true},
            {text: 'Golf', correct: false},
            {text: 'Football', correct: false},
            {text: 'Soccer', correct: false}
        ]
    },
    {
        question: 'Which of these players became the youngest Regular Season MVP when he achieved it at 22 years old?',
        answers: [
            {text: 'Derrick Rose', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'LeBron James', correct: false},
            {text: 'Kareem Abdul Jabbar', correct: false}
        ]
    },
    {
        question: 'Which of these teams was the only one capable of coming back from a 3-1 deficit in the NBA Finals?',
        answers: [
            {text: 'Cleveland Cavaliers', correct: true},
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'Detroit Pistons', correct: false},
            {text: 'Miami Heat', correct: false}
        ]
    },
    {
        question: 'Which player is the silhouette that we can see in the NBA logo?',
        answers: [
            {text: 'Jerry West', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Bill Russell', correct: false},
            {text: 'Oscar Robertson', correct: false}
        ]
    },
    {
        question: 'What do the acronym NBA mean?',
        answers: [
            {text: 'National Basketball Association', correct: true},
            {text: 'National Basketball Alliance', correct: false},
            {text: 'National Basketball Assembly', correct: false},
            {text: 'New Ballers Army', correct: false}
        ]
    },
    {
        question: 'Which former franchise was renamed the Oklahoma City Thunder in 2008?',
        answers: [
            {text: 'Seattle Supersonics', correct: true},
            {text: 'Charlotte Bobcats', correct: false},
            {text: 'Buffalo Braves', correct: false},
            {text: 'New Jersey Nets', correct: false}
        ]
    },
    {
        question: 'What name did the New Orleans Pelicans receive until their change in 2013?',
        answers: [
            {text: 'New Orleans Hornets', correct: true},
            {text: 'New Orleans Hurricanes', correct: false},
            {text: 'New Orleans Jazz', correct: false},
            {text: 'New Orleans Bobcats', correct: false}
        ]
    },
    {
        question: 'Where did the Nets play until their move to Brooklyn in 2012?',
        answers: [
            {text: 'New Jersey', correct: true},
            {text: 'Las Vegas', correct: false},
            {text: 'Vancouver', correct: false},
            {text: 'San Diego', correct: false}
        ]
    },
    {
        question: 'Which of these players is sponsored by Under Armour?',
        answers: [
            {text: 'Stephen Curry', correct: true},
            {text: 'Lamelo Ball', correct: false},
            {text: 'Kawhi Leonard', correct: false},
            {text: 'John Wall', correct: false}
        ]
    },
    {
        question: 'Which of these players is sponsored by Reebok?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: true},
            {text: 'Paul George', correct: false},
            {text: 'Damian Lillard', correct: false},
            {text: 'James Harden', correct: false}
        ]
    },
    {
        question: 'Which of these players did not go directly from High School to the NBA?',
        answers: [
            {text: 'Michael Jordan', correct: true},
            {text: 'LeBron James', correct: false},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Tracy McGrady', correct: false}
        ]
    },
    {
        question: 'Which of these players did not go directly from High School to the NBA?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: true},
            {text: 'Dwight Howard', correct: false},
            {text: 'Amar\'e Stoudemire', correct: false},
            {text: 'J.R. Smith', correct: false}
        ]
    },
    {
        question: 'Which of these Franchises did Michael Jordan own?',
        answers: [
            {text: 'Charlotte Hornets', correct: true},
            {text: 'Chicago Bulls', correct: false},
            {text: 'New Orleans Pelicans', correct: false},
            {text: 'Washington Wizards', correct: false}
        ]
    },
    {
        question: 'What was the first team in NBA history to hire a woman as an assistant coach?',
        answers: [
            {text: 'San Antonio Spurs', correct: true},
            {text: 'Sacramento Kings', correct: false},
            {text: 'Indiana Pacers', correct: false},
            {text: 'Miami Heat', correct: false}
        ]
    },
    {
        question: 'Which San Antonio Spurs player caught a bat with his hands during an NBA game?',
        answers: [
            {text: 'Manu Ginobili', correct: true},
            {text: 'Tony Paker', correct: false},
            {text: 'Tim Duncan', correct: false},
            {text: 'Matt Bonner', correct: false}
        ]
    },
    {
        question: 'Which of these players never achieved a quadruple-double?',
        answers: [
            {text: 'Wilt Chamberlain', correct: true},
            {text: 'Hakeem Olajuwon', correct: false},
            {text: 'David Robinson', correct: false},
            {text: 'Nate Thurmond', correct: false}
        ]
    },
    {
        question: 'Against which team did Michael Jordan win his first NBA championship?',
        answers: [
            {text: 'Los Angeles Lakers', correct: true},
            {text: 'Utah Jazz', correct: false},
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'Phoenix Suns', correct: false}
        ]
    },
    {
        question: 'Against which team did LeBron James win his first NBA championship?',
        answers: [
            {text: 'Oklahoma City Thunder', correct: true},
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'San Antonio Spurs', correct: false},
            {text: 'Dallas Mavericks', correct: false}
        ]
    },
    {
        question: 'Against which team did Kobe Bryant win his first NBA championship?',
        answers: [
            {text: 'Indiana Pacers', correct: true},
            {text: 'Philadeplhia 76ers', correct: false},
            {text: 'New Jersey Nets', correct: false},
            {text: 'Detroit Pistons', correct: false}
        ]
    },
    {
        question: 'Which of these Franchises established the best Regular Season record at 73-9?',
        answers: [
            {text: 'Golden State Warriors', correct: true},
            {text: 'Chicago Bulls', correct: false},
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'San Antonio Spurs', correct: false}
        ]
    },
    {
        question: 'Which franchise won 33 consecutive games setting a new NBA record?',
        answers: [
            {text: 'Los Angeles Lakers', correct: true},
            {text: 'Golden State Warriors', correct: false},
            {text: 'Chicago Bulls', correct: false},
            {text: 'Miami Heat', correct: false}
        ]
    },
    {
        question: 'Which of these players was not a coach after his retirement?',
        answers: [
            {text: 'Magic Johnson', correct: true},
            {text: 'Jason Kidd', correct: false},
            {text: 'Bill Russell', correct: false},
            {text: 'Larry Bird', correct: false}
        ]
    },
    {
        question: 'Who is the player with the most NBA Championships in his playing career?',
        answers: [
            {text: 'Bill Russell', correct: true},
            {text: 'Magic Johnson', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Kareem Abudl-Jabbar', correct: false}
        ]
    },
    {
        question: 'Who is the youngest player in NBA history to score 70 points in a game?',
        answers: [
            {text: 'Devin Booker', correct: true},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Luka Doncic', correct: false},
            {text: 'Wilt Chamberlain', correct: false}
        ]
    },
    {
        question: 'Who was the first player in NBA history to win the MVP and Defensive Player of the Year awards in the same season?',
        answers: [
            {text: 'Hakeem Olajuwon', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Bill Russell', correct: false},
            {text: 'Kareem Abdul-Jabbar', correct: false}
        ]
    },
    {
        question: 'Who was the youngest player in NBA history to win Regular Season MVP?',
        answers: [
            {text: 'Derrick Rose', correct: true},
            {text: 'Magic Johnson', correct: false},
            {text: 'LeBron James', correct: false},
            {text: 'Kareem Abdul-Jabbar', correct: false}
        ]
    },
    {
        question: 'Who was the youngest player to make his NBA debut?',
        answers: [
            {text: 'Andrew Bynum', correct: true},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Jrue Holiday', correct: false},
            {text: 'Ricky Rubio', correct: false}
        ]
    },
    {
        question: 'Which of these players jumped over a car in the Dunk Contest?',
        answers: [
            {text: 'Blake Griffin', correct: true},
            {text: 'Victor Oladipo', correct: false},
            {text: 'Zach Lavine', correct: false},
            {text: 'Aaron Gordon', correct: false}
        ]
    },
    {
        question: 'Who was the youngest player to debut in the All Star Game?',
        answers: [
            {text: 'Kobe Bryant', correct: true},
            {text: 'LeBron James', correct: false},
            {text: 'Magic Johnson', correct: false},
            {text: 'Anthony Davis', correct: false}
        ]
    },
    {
        question: 'Where did the Lakers start playing until their move to Los Angeles in 1960?',
        answers: [
            {text: 'Minneapolis', correct: true},
            {text: 'San Diego', correct: false},
            {text: 'San Francisco', correct: false},
            {text: 'Kansas City', correct: false}
        ]
    },
    {
        question: 'Which of these players is Vince Carter\'s cousin?',
        answers: [
            {text: 'Tracy McGrady', correct: true},
            {text: 'James Harden', correct: false},
            {text: 'Allen Iverson', correct: false},
            {text: 'Grant Hill', correct: false}
        ]
    },
    {
        question: 'What number did Michael Jordan wear for Team USA?',
        answers: [
            {text: '9', correct: true},
            {text: '3', correct: false},
            {text: '10', correct: false},
            {text: '23', correct: false}
        ]
    },
    {
        question: 'What number did Kobe Bryant wear for Team USA?',
        answers: [
            {text: '10', correct: true},
            {text: '6', correct: false},
            {text: '24', correct: false},
            {text: '8', correct: false}
        ]
    },
    {
        question: 'What number did Tim Duncan wear in the NBA?',
        answers: [
            {text: '21', correct: true},
            {text: '13', correct: false},
            {text: '32', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: 'What number did Magic Johnson wear in the NBA?',
        answers: [
            {text: '32', correct: true},
            {text: '33', correct: false},
            {text: '34', correct: false},
            {text: '31', correct: false}
        ]
    },
    {
        question: 'What number did Michael Jordan wear for the Chicago Bulls besides number 23?',
        answers: [
            {text: '45', correct: true},
            {text: '9', correct: false},
            {text: '3', correct: false},
            {text: '32', correct: false}
        ]
    },
    {
        question: 'What number did LeBron James wear throughout his career besides number 23?',
        answers: [
            {text: '6', correct: true},
            {text: '10', correct: false},
            {text: '32', correct: false},
            {text: '1', correct: false}
        ]
    },
    {
        question: 'What number did Kobe Bryant wear for the Los Angeles Lakers until he changed it to number 24 in 2004?',
        answers: [
            {text: '8', correct: true},
            {text: '10', correct: false},
            {text: '21', correct: false},
            {text: '6', correct: false}
        ]
    },
    {
        question: 'Which player holds the record for most points per game in a season?',
        answers: [
            {text: 'Wilt Chamberlain', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Kareem Abdul Jabbar', correct: false},
            {text: 'James Harden', correct: false}
        ]
    },
    {
        question: 'Which player holds the record for most rebounds per game in a season?',
        answers: [
            {text: 'Wilt Chamberlain', correct: true},
            {text: 'Bill Russell', correct: false},
            {text: 'Dennis Rodman', correct: false},
            {text: 'Moses Malone', correct: false}
        ]
    },
    {
        question: 'Which player holds the record for most assists per game in a season?',
        answers: [
            {text: 'John Stockton', correct: true},
            {text: 'Isiah Thomas', correct: false},
            {text: 'Magic Johnson', correct: false},
            {text: 'Steve Nash', correct: false}
        ]
    },
    {
        question: 'Which player holds the record for most steals per game in a season?',
        answers: [
            {text: 'Alvin Robertson', correct: true},
            {text: 'Magic Johnson', correct: false},
            {text: 'John Stockton', correct: false},
            {text: 'Michael Jordan', correct: false}
        ]
    },
    {
        question: 'Which player holds the record for most blocks per game in a season?',
        answers: [
            {text: 'Mark Eaton', correct: true},
            {text: 'Manute Bol', correct: false},
            {text: 'Hakeem Olajuwon', correct: false},
            {text: 'Dikembe Mutombo', correct: false}
        ]
    },
    {
        question: 'Which of these players has never won an NBA Three-Point Contest?',
        answers: [
            {text: 'James Harden', correct: true},
            {text: 'Klay Thompson', correct: false},
            {text: 'Ray Allen', correct: false},
            {text: 'Kyrie Irving', correct: false}
        ]
    },
    {
        question: 'Which of these players has never won an NBA Three-Point Contest?',
        answers: [
            {text: 'Kevin Durant', correct: true},
            {text: 'Dirk Nowitzki', correct: false},
            {text: 'Kevin Love', correct: false},
            {text: 'Devin Booker', correct: false}
        ]
    },
    {
        question: 'Who is the player who has achieved the most triple doubles in the Regular Season in NBA history?',
        answers: [
            {text: 'Russell Westbrook', correct: true},
            {text: 'Oscar Robertson', correct: false},
            {text: 'Magic Johnson', correct: false},
            {text: 'LeBron James', correct: false}
        ]
    },
    {
        question: 'What NCAA team did Michael Jordan play on?',
        answers: [
            {text: 'North Carolina Tar Heels', correct: true},
            {text: 'Duke Blue Devils', correct: false},
            {text: 'Virginia Cavaliers', correct: false},
            {text: 'Villanova Wildcats', correct: false}
        ]
    },
    {
        question: 'Who is the player with the most Regular Season MVP awards in NBA history?',
        answers: [
            {text: 'Kareem Abdul-Jabbar', correct: true},
            {text: 'Wilt Chamberlain', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Bill Russell', correct: false}
        ]
    },
    {
        question: 'Which player set the record for most assists in an NBA game with 30 assists?',
        answers: [
            {text: 'Scott Skiles', correct: true},
            {text: 'Jason Kidd', correct: false},
            {text: 'Steve Nash', correct: false},
            {text: 'Russell Westbrook', correct: false}
        ]
    },
    {
        question: 'Which player set the record for most threes in an NBA game with 14 threes?',
        answers: [
            {text: 'Klay Thompson', correct: true},
            {text: 'Stephen Curry', correct: false},
            {text: 'Damian Lillard', correct: false},
            {text: 'Kobe Bryant', correct: false}
        ]
    },
    {
        question: 'Who is the coach who won the most NBA Championships?',
        answers: [
            {text: 'Phil Jackson', correct: true},
            {text: 'Red Auerbach', correct: false},
            {text: 'Pat Riley', correct: false},
            {text: 'Gregg Popovich', correct: false}
        ]
    },
    {
        question: 'Which of these players has never won the Sixth Man of the Year award?',
        answers: [
            {text: 'Andre Iguodala', correct: true},
            {text: 'James Harden', correct: false},
            {text: 'J.R. Smith', correct: false},
            {text: 'Lamar Odom', correct: false}
        ]
    },
    {
        question: 'Which of these players has never won the Sixth Man of the Year award?',
        answers: [
            {text: 'Kevin Love', correct: true},
            {text: 'Jason Terry', correct: false},
            {text: 'Toni Kukoc', correct: false},
            {text: 'Manu Ginobili', correct: false}
        ]
    },
    {
        question: 'Which of these players was not chosen with the first pick in the NBA Draft?',
        answers: [
            {text: 'Kobe Bryant', correct: true},
            {text: 'LeBron James', correct: false},
            {text: 'Magic Johnson', correct: false},
            {text: 'Yao Ming', correct: false}
        ]
    },
    {
        question: 'Which of these players was not chosen with the first pick in the NBA Draft?',
        answers: [
            {text: 'Michael Jordan', correct: true},
            {text: 'Kyrie Irving', correct: false},
            {text: 'Tim Duncan', correct: false},
            {text: 'Allen Iverson', correct: false}
        ]
    },
    {
        question: 'Which of these players was not chosen with the first pick in the NBA Draft?',
        answers: [
            {text: 'Kevin Garnett', correct: true},
            {text: 'Derrick Rose', correct: false},
            {text: 'Dwight Howard', correct: false},
            {text: 'Hakeem Olajuwon', correct: false}
        ]
    },
    {
        question: 'Which of these players was not chosen with the first pick in the NBA Draft?',
        answers: [
            {text: 'Giannis Antetokounmpo', correct: true},
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Andrea Bargnani', correct: false},
            {text: 'Anthony Davis', correct: false}
        ]
    },
    {
        question: 'Which of these players was not chosen with the first pick in the NBA Draft?',
        answers: [
            {text: 'Kevin Durant', correct: true},
            {text: 'John Wall', correct: false},
            {text: 'Zion Williamson', correct: false},
            {text: 'Blake Griffin', correct: false}
        ]
    },
    {
        question: 'Which of these players did not play for the San Antonio Spurs his entire career?',
        answers: [
            {text: 'Tony Parker', correct: true},
            {text: 'David Robinson', correct: false},
            {text: 'Manu Ginobili', correct: false},
            {text: 'Tim Duncan', correct: false}
        ]
    },
    {
        question: 'Which of these players did not play for the Los Angeles Lakers his entire career?',
        answers: [
            {text: 'Derek Fisher', correct: true},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Jerry West', correct: false},
            {text: 'Magic Johnson', correct: false}
        ]
    },
    {
        question: 'Which of these players did not spend his entire career in the same Franchise?',
        answers: [
            {text: 'Julius Erving', correct: true},
            {text: 'Stephen Curry', correct: false},
            {text: 'Udonis Haslem', correct: false},
            {text: 'Isiah Thomas', correct: false}
        ]
    },
    {
        question: 'Which of these players did not spend his entire career in the same Franchise?',
        answers: [
            {text: 'Michael Jordan', correct: true},
            {text: 'John Stockton', correct: false},
            {text: 'Reggie Miller', correct: false},
            {text: 'Dirk Nowitzki', correct: false}
        ]
    },
    {
        question: 'Which of these former players\' son won the NBA Championship in 2022?',
        answers: [
            {text: 'Gary Payton', correct: true},
            {text: 'Arvydas Sabonis', correct: false},
            {text: 'Kenyon Martin', correct: false},
            {text: 'Magic Johnson', correct: false}
        ]
    },
    {
        question: 'Who was the only NBA player to win the Finals MVP award by losing the series?',
        answers: [
            {text: 'Jerry West', correct: true},
            {text: 'LeBron James', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Allen Iverson', correct: false}
        ]
    },
    {
        question: 'Which team lost 28 consecutive games in the 23/24 season, establishing the worst streak in NBA history?',
        answers: [
            {text: 'Detroit Pistons', correct: true},
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'San Antonio Spurs', correct: false},
            {text: 'Washington Wizards', correct: false}
        ]
    },
    {
        question: 'Which franchise does the mascot "Go the Gorilla" belong to?',
        answers: [
            {text: 'Phoenix Suns', correct: true},
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'San Antonio Spurs', correct: false}
        ]
    },
]

const preguntas = [
    // ¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Kobe Bryant', correct: false},
            {text: 'LeBron James', correct: true},
            {text: 'Kareem Abdul-Jabbar', correct: false},
            {text: 'Tim Duncan', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Chris Bosh', correct: true},
            {text: 'Paul Pierce', correct: false},
            {text: 'Ray Allen', correct: false},
            {text: 'Jason Kidd', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Kyrie Irving', correct: true},
            {text: 'Tracy McGrady', correct: false},
            {text: 'Scottie Pippen', correct: false},
            {text: 'Alonzo Mourning', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Joe Johnson', correct: true},
            {text: 'Pau Gasol', correct: false},
            {text: 'Kyle Lowry', correct: false},
            {text: 'Kevin Love', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Shawn Marion', correct: true},
            {text: 'Derrick Rose', correct: false},
            {text: 'Bradley Beal', correct: false},
            {text: 'Rudy Gobert', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Richard Hamilton', correct: true},
            {text: 'Manu Ginobili', correct: false},
            {text: 'Bill Walton', correct: false},
            {text: 'Dennis Rodman', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Dwyane Wade', correct: true},
            {text: 'Larry Bird', correct: false},
            {text: 'Chris Paul', correct: false},
            {text: 'Patrick Ewing', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: true},
            {text: 'Magic Johnson', correct: false},
            {text: 'Julius Erving', correct: false},
            {text: 'Allen Iverson', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Dirk Nowitzki', correct: true},
            {text: 'Wilt Chamberlain', correct: false},
            {text: 'Dwyane Wade', correct: false},
            {text: 'Hakeem Olajuwon', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ha sido seleccionado más veces para el All Star Game?',
        answers: [
            {text: 'Kevin Garnett', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Karl Malone', correct: false},
            {text: 'Jerry West', correct: false}
        ]
    },
    // ¿Cuál de estos jugadores nunca jugó en EQUIPO?
    {
        question: '¿Cuál de estos jugadores nunca jugó en Los Angeles Lakers?',
        answers: [
            {text: 'Jason Kidd', correct: true},
            {text: 'Steve Nash', correct: false},
            {text: 'Isaiah Thomas', correct: false},
            {text: 'Marc Gasol', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca jugó en los Cleveland Cavaliers?',
        answers: [
            {text: 'Dwight Howard', correct: true},
            {text: 'Dwyane Wade', correct: false},
            {text: 'Derrick Rose', correct: false},
            {text: 'Deron Williams', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca jugó en los Charlotte Hornets?',
        answers: [
            {text: 'Russell Wetbrook', correct: true},
            {text: 'Jason Richardson', correct: false},
            {text: 'Tony Parker', correct: false},
            {text: 'Dwight Howard', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca jugó en los Washington Wizards?',
        answers: [
            {text: 'Alonzo Mourning', correct: true},
            {text: 'Dwight Howard', correct: false},
            {text: 'Paul Pierce', correct: false},
            {text: 'Russell Westbrook', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca jugó en los Toronto Raptors?',
        answers: [
            {text: 'Deron Williams', correct: true},
            {text: 'Jermaine O\'Neal', correct: false},
            {text: 'P.J. Tucker', correct: false},
            {text: 'Hakeem Olajuwon', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca jugó en los Boston Celtics?',
        answers: [
            {text: 'Chris Webber', correct: true},
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Blake Griffin', correct: false},
            {text: 'Joe Johnson', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca jugó en Los Angeles Lakers?',
        answers: [
            {text: 'Chris Bosh', correct: true},
            {text: 'Brook Lopez', correct: false},
            {text: 'Gary Payton', correct: false},
            {text: 'Dennis Rodman', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca jugó en Los Angeles Clippers?',
        answers: [
            {text: 'Peja Stojakovic', correct: true},
            {text: 'Antawn Jamison', correct: false},
            {text: 'Lamar Odom', correct: false},
            {text: 'Chauncey Billups', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca jugó en Los Angeles Clippers?',
        answers: [
            {text: 'Jeremy Lin', correct: true},
            {text: 'Danny Granger', correct: false},
            {text: 'Nate Robinson', correct: false},
            {text: 'Tobias Harris', correct: false}
        ]
    },
    // ¿Cuál de estos jugadores jugó en los EQUIPO?
    {
        question: '¿Cuál de estos jugadores jugó en Los Angeles Lakers?',
        answers: [
            {text: 'Carlos Boozer', correct: true},
            {text: 'Chris Paul', correct: false},
            {text: 'John Wall', correct: false},
            {text: 'Stephon Marbury', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores jugó en los Detroit Pistons?',
        answers: [
            {text: 'Derrick Rose', correct: true},
            {text: 'Ray Allen', correct: false},
            {text: 'Carmelo Anthony', correct: false},
            {text: 'Scottie Pippen', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores jugó en los New York Knicks?',
        answers: [
            {text: 'Jason Kidd', correct: true},
            {text: 'Kevin Garnett', correct: false},
            {text: 'DeMarcus Cousins', correct: false},
            {text: 'Russell Westbrook', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores jugó en los Chicago Bulls?',
        answers: [
            {text: 'Ron Artest', correct: true},
            {text: 'Gilbert Arenas', correct: false},
            {text: 'Tony Parker', correct: false},
            {text: 'LaMarcus Aldridge', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores jugó en los Orlando Magic?',
        answers: [
            {text: 'Patrick Ewing', correct: true},
            {text: 'Gary Payton', correct: false},
            {text: 'Dennis Rodman', correct: false},
            {text: 'Hakeem Olajuwon', correct: false}
        ]
    },
    // ¿Cuál de estos jugadores anotó más puntos en Temporada Regular en su carrera?
    {
        question: '¿Cuál de estos jugadores anotó más puntos en Temporada Regular en su carrera?',
        answers: [
            {text: 'Kareem Abdul-Jabbar', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Karl Malone', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores anotó más puntos en Temporada Regular en su carrera?',
        answers: [
            {text: 'Dirk Nowitzki', correct: true},
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Carmelo Anthony', correct: false},
            {text: 'Wilt Chamberlain', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores anotó más puntos en Temporada Regular en su carrera?',
        answers: [
            {text: 'Carmelo Anthony', correct: true},
            {text: 'Tim Duncan', correct: false},
            {text: 'Kevin Garnett', correct: false},
            {text: 'Patrick Ewing', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores anotó más puntos en Temporada Regular en su carrera?',
        answers: [
            {text: 'Vince Carter', correct: true},
            {text: 'Charles Barkley', correct: false},
            {text: 'Dwyane Wade', correct: false},
            {text: 'Allen Iverson', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores anotó más puntos en Temporada Regular en su carrera?',
        answers: [
            {text: 'Pau Gasol', correct: true},
            {text: 'Manu Ginobili', correct: false},
            {text: 'Tony Parker', correct: false},
            {text: 'Steve Nash', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores anotó más puntos en Temporada Regular en su carrera?',
        answers: [
            {text: 'Ray Allen', correct: true},
            {text: 'Larry Bird', correct: false},
            {text: 'Allen Iverson', correct: false},
            {text: 'David Robinson', correct: false}
        ]
    },
    // ¿Cuál de estos jugadores no jugó nunca el All Star Game?
    {
        question: '¿Cuál de estos jugadores no jugó nunca el All Star Game?',
        answers: [
            {text: 'Lamar Odom', correct: true},
            {text: 'Kyle Korver', correct: false},
            {text: 'Jarrett Allen', correct: false},
            {text: 'Goran Dragic', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no jugó nunca el All Star Game?',
        answers: [
            {text: 'Mike Bibby', correct: true},
            {text: 'DeAndre Jordan', correct: false},
            {text: 'Andre Iguodala', correct: false},
            {text: 'Devin Harris', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no jugó nunca el All Star Game?',
        answers: [
            {text: 'Drazen Petrovic', correct: true},
            {text: 'Jameer Nelson', correct: false},
            {text: 'D\'Angelo Russell', correct: false},
            {text: 'Chris Kaman', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no jugó nunca el All Star Game?',
        answers: [
            {text: 'Arvydas Sabonis', correct: true},
            {text: 'Ron Artest', correct: false},
            {text: 'Caron Butler', correct: false},
            {text: 'Mo Williams', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no jugó nunca el All Star Game?',
        answers: [
            {text: 'Jamal Crawford', correct: true},
            {text: 'Stephon Marbury', correct: false},
            {text: 'Baron Davis', correct: false},
            {text: 'Luol Deng', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no jugó nunca el All Star Game?',
        answers: [
            {text: 'Jason Terry', correct: true},
            {text: 'Tyson Chandler', correct: false},
            {text: 'Joakim Noah', correct: false},
            {text: 'Andrei Kirilenko', correct: false}
        ]
    },
    // ¿Cuántos Campeonatos de la NBA ganó JUGADOR a lo largo de su carrera?
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Dirk Nowitzki a lo largo de su carrera?',
        answers: [
            {text: 0, correct: false},
            {text: 1, correct: true},
            {text: 2, correct: false},
            {text: 3, correct: false}
        ]
    },
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Michael Jordan a lo largo de su carrera?',
        answers: [
            {text: 5, correct: false},
            {text: 6, correct: true},
            {text: 7, correct: false},
            {text: 8, correct: false}
        ]
    },
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Kobe Bryant a lo largo de su carrera?',
        answers: [
            {text: 5, correct: true},
            {text: 6, correct: false},
            {text: 7, correct: false},
            {text: 8, correct: false}
        ]
    },
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Dwyane Wade a lo largo de su carrera?',
        answers: [
            {text: 1, correct: false},
            {text: 2, correct: false},
            {text: 3, correct: true},
            {text: 4, correct: false}
        ]
    },
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Pau Gasol a lo largo de su carrera?',
        answers: [
            {text: 4, correct: false},
            {text: 2, correct: true},
            {text: 1, correct: false},
            {text: 3, correct: false}
        ]
    },
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Tim Duncan a lo largo de su carrera?',
        answers: [
            {text: 3, correct: false},
            {text: 5, correct: true},
            {text: 4, correct: false},
            {text: 6, correct: false}
        ]
    },
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Allen Iverson a lo largo de su carrera?',
        answers: [
            {text: 1, correct: false},
            {text: 0, correct: true},
            {text: 2, correct: false},
            {text: 3, correct: false}
        ]
    },
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Shaquille O\'Neal a lo largo de su carrera?',
        answers: [
            {text: 3, correct: false},
            {text: 4, correct: true},
            {text: 2, correct: false},
            {text: 5, correct: false}
        ]
    },
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Magic Johnson a lo largo de su carrera?',
        answers: [
            {text: 2, correct: false},
            {text: 5, correct: true},
            {text: 4, correct: false},
            {text: 3, correct: false}
        ]
    },
    {
        question: '¿Cuántos Campeonatos de la NBA ganó Hakeem Olajuwon a lo largo de su carrera?',
        answers: [
            {text: 1, correct: false},
            {text: 2, correct: true},
            {text: 4, correct: false},
            {text: 3, correct: false}
        ]
    },
// En cuál de estos equipos no jugó nunca JUGADOR?
    {
        question: '¿En cuál de estos equipos no jugó nunca Tracy McGrady?',
        answers: [
            {text: 'San Antonio Spurs', correct: false},
            {text: 'New York Knicks', correct: false},
            {text: 'Philadelphia 76ers', correct: true},
            {text: 'Toronto Raptors', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos equipos no jugó nunca Allen Iverson?',
        answers: [
            {text: 'Houston Rockets', correct: true},
            {text: 'Denver Nuggets', correct: false},
            {text: 'Memphis Grizzlies', correct: false},
            {text: 'Detroit Pistons', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos equipos no jugó nunca Chris Paul?',
        answers: [
            {text: 'Houston Rockets', correct: false},
            {text: 'Philadelphia 76ers', correct: true},
            {text: 'New Orleans Hornets', correct: false},
            {text: 'Phoenix Suns', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos equipos no jugó nunca Blake Griffin?',
        answers: [
            {text: 'Detroit Pistons', correct: false},
            {text: 'Atlanta Hawks', correct: true},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'Boston Celtics', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos equipos no jugó nunca Carmelo Anthony?',
        answers: [
            {text: 'Miami Heat', correct: true},
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'Houston Rockets', correct: false},
            {text: 'Oklahoma City Thunder', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos equipos no jugó nunca Jimmy Butler?',
        answers: [
            {text: 'Denver Nuggets', correct: true},
            {text: 'Chicago Bulls', correct: false},
            {text: 'Philadelphia 76ers', correct: false},
            {text: 'Minnesota Timberwolves', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos equipos no jugó nunca Kyrie Irving?',
        answers: [
            {text: 'Los Angeles Lakers', correct: true},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'Dallas Mavericks', correct: false},
            {text: 'Boston Celtics', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos equipos no jugó nunca Kevin Garnett?',
        answers: [
            {text: 'Washington Wizards', correct: true},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'Minnesota Timberwolves', correct: false},
            {text: 'Boston Celtics', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos equipos no jugó nunca James Harden?',
        answers: [
            {text: 'New York Knicks', correct: true},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'Philadelphia 76ers', correct: false},
            {text: 'Oklahoma City Thunder', correct: false}
        ]
    },
// ¿Cuál de estos equipos seleccionó a JUGADOR en el Draft de la NBA?
    {
        question: '¿Cuál de estos equipos seleccionó a Luka Doncic en el Draft de la NBA?',
        answers: [
            {text: 'Dallas Mavericks', correct: false},
            {text: 'Detroit Pistons', correct: false},
            {text: 'Indiana Pacers', correct: false},
            {text: 'Atlanta Hawks', correct: true}
        ]
    },
    {
        question: '¿Cuál de estos equipos seleccionó a Kobe Bryant en el Draft de la NBA?',
        answers: [
            {text: 'Boston Celtics', correct: false},
            {text: 'New Jersey Nets', correct: false},
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'Charlotte Hornets', correct: true}
        ]
    },
    {
        question: '¿Cuál de estos equipos seleccionó a Kawhi Leonard en el Draft de la NBA?',
        answers: [
            {text: 'Utah Jazz', correct: false},
            {text: 'Los Angeles Clippers', correct: false},
            {text: 'San Antonio Spurs', correct: false},
            {text: 'Indiana Pacers', correct: true}
        ]
    },
// ¿Cuál de estos jugadores nunca ganó un premio de Mejor Defensor de la Temporada?
    {
        question: '¿Cuál de estos jugadores nunca ganó un premio de Mejor Defensor de la Temporada?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: true},
            {text: 'Marc Gasol', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Joakim Noah', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca ganó un premio de Mejor Defensor de la Temporada?',
        answers: [
            {text: 'Tim Duncan', correct: true},
            {text: 'Marcus Smart', correct: false},
            {text: 'Giannis Antetokounmpo', correct: false},
            {text: 'Kawhi Leonard', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores nunca ganó un premio de Mejor Defensor de la Temporada?',
        answers: [
            {text: 'Anthony Davis', correct: true},
            {text: 'Ron Artest', correct: false},
            {text: 'Draymond Green', correct: false},
            {text: 'Tyson Chandler', correct: false}
        ]
    },
// ¿A cuál de estos jugadores se le conoce también como APODO?
    {
        question: '¿A cuál de estos jugadores se le conoce también como "Flash"?',
        answers: [
            {text: 'Aaron Gordon', correct: false},
            {text: 'De\'Aaron Fox', correct: false},
            {text: 'Dwyane Wade', correct: true},
            {text: 'John Wall', correct: false}
        ]
    },
    {
        question: '¿A cuál de estos jugadores se le conoce también como "The Answer"?',
        answers: [
            {text: 'Vince Carter', correct: false},
            {text: 'DeMarcus Cousins', correct: false},
            {text: 'Allen Iverson', correct: true},
            {text: 'Paul Pierce', correct: false}
        ]
    },
    {
        question: '¿A cuál de estos jugadores se le conoce también como "The Truth"?',
        answers: [
            {text: 'Tim Duncan', correct: false},
            {text: 'Jamal Crawford', correct: false},
            {text: 'Allen Iverson', correct: false},
            {text: 'Paul Pierce', correct: true}
        ]
    },
    {
        question: '¿A cuál de estos jugadores se le conoce también como "White Chocolate"?',
        answers: [
            {text: 'Jason Kidd', correct: false},
            {text: 'Steve Nash', correct: false},
            {text: 'Larry Bird', correct: false},
            {text: 'Jason Williams', correct: true}
        ]
    },
    {
        question: '¿A cuál de estos jugadores se le conoce también como "The Matrix"?',
        answers: [
            {text: 'Tim Duncan', correct: false},
            {text: 'Dwight Howard', correct: false},
            {text: 'Vince Carter', correct: false},
            {text: 'Shawn Marion', correct: true}
        ]
    },
    {
        question: '¿A cuál de estos jugadores se le conoce también como "The Dream"?',
        answers: [
            {text: 'Tim Duncan', correct: false},
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Kareem Abdul-Jabbar', correct: false},
            {text: 'Hakeem Olajuwon', correct: true}
        ]
    },
    {
        question: '¿A cuál de estos jugadores se le conoce también como "Boogie"?',
        answers: [
            {text: 'Dennis Rodman', correct: false},
            {text: 'Jose Alvarado', correct: false},
            {text: 'Russell Westbrook', correct: false},
            {text: 'DeMarcus Cousins', correct: true}
        ]
    },
// ¿Cuántos premios de MVP de la Temporada Regular ganó JUGADOR?
    {
        question: '¿Cuántos premios de MVP de la Temporada Regular ganó Kobe Bryant?',
        answers: [
            {text: 1, correct: true},
            {text: 2, correct: false},
            {text: 3, correct: false},
            {text: 4, correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de la Temporada Regular ganó Michael Jordan?',
        answers: [
            {text: 7, correct: false},
            {text: 4, correct: false},
            {text: 5, correct: true},
            {text: 6, correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de la Temporada Regular ganó LeBron James?',
        answers: [
            {text: 3, correct: false},
            {text: 4, correct: true},
            {text: 5, correct: false},
            {text: 6, correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de la Temporada Regular ganó Stephen Curry?',
        answers: [
            {text: 1, correct: false},
            {text: 2, correct: true},
            {text: 3, correct: false},
            {text: 4, correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de la Temporada Regular ganó Magic Johnson?',
        answers: [
            {text: 5, correct: false},
            {text: 2, correct: false},
            {text: 3, correct: true},
            {text: 4, correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de la Temporada Regular ganó John Stockton?',
        answers: [
            {text: 1, correct: false},
            {text: 2, correct: false},
            {text: 0, correct: true},
            {text: 3, correct: false}
        ]
    },
// ¿Cuál de estos jugadores nunca ganó un premio MVP de las Finales de la NBA?
    {
        question: '¿Cuál de estos jugadores nunca ganó un MVP de las Finales de la NBA?',
        answers: [
            {text: 'Andre Iguodala', correct: false},
            {text: 'Scottie Pippen', correct: true},
            {text: 'Tony Parker', correct: false},
            {text: 'Chauncey Billups', correct: false}
    ]
    },
    {
        question: '¿Cuál de estos jugadores nunca ganó un premio MVP de las Finales de la NBA?',
        answers: [
            {text: 'Paul Pierce', correct: false},
            {text: 'Clyde Drexler', correct: true},
            {text: 'Dwyane Wade', correct: false},
            {text: 'Isiah Thomas', correct: false}
    ]
    },
// ¿Cuántos premios de MVP de las Finales de la NBA ganó JUGADOR?
    {
        question: '¿Cuántos premios de MVP de las Finales de la NBA ganó Kevin Durant?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de las Finales de la NBA ganó Kobe Bryant?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de las Finales de la NBA ganó Dwyane Wade?',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '0', correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de las Finales de la NBA ganó LeBron James?',
        answers: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: true},
            {text: '5', correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de las Finales de la NBA ganó Tim Duncan?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: true},
            {text: '0', correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de las Finales de la NBA ganó Michael Jordan?',
        answers: [
            {text: '4', correct: false},
            {text: '5', correct: false},
            {text: '6', correct: true},
            {text: '7', correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de las Finales de la NBA ganó Kawhi Leonard?',
        answers: [
            {text: '0', correct: false},
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false}
        ]
    },
    {
        question: '¿Cuántos premios de MVP de las Finales de la NBA ganó Stephen Curry?',
        answers: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '1', correct: true},
            {text: '4', correct: false}
        ]
    },
// ¿Cuál de estas Franquicias aún no ha ganado un Campeonato de la NBA?
    {
        question: '¿Cuál de estas Franquicias aún no ha ganado un Campeonato de la NBA?',
        answers: [
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'Minnesota Timberwolves', correct: true},
            {text: 'Dallas Mavericks', correct: false},
            {text: 'Washington Wizards', correct: false}
        ]
    },
    {
        question: '¿Cuál de estas Franquicias aún no ha ganado un Campeonato de la NBA?',
        answers: [
            {text: 'Detroit Pistons', correct: false},
            {text: 'Los Angeles Clippers', correct: true},
            {text: 'Toronto Raptors', correct: false},
            {text: 'New York Knicks', correct: false}
        ]
    },
// ¿En cuál de estos países nació el ex jugador JUGADOR?
    {
        question: '¿En cuál de estos países nació el ex jugador Steve Nash?',
        answers: [
            {text: 'Canadá', correct: false},
            {text: 'Sudáfrica', correct: true},
            {text: 'Estados Unidos', correct: false},
            {text: 'Reino Unido', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos países nació el ex jugador Goran Dragic?',
        answers: [
            {text: 'Serbia', correct: false},
            {text: 'Eslovenia', correct: true},
            {text: 'Croacia', correct: false},
            {text: 'Lituania', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos países nació el ex jugador Marcin Gortat?',
        answers: [
            {text: 'Alemania', correct: false},
            {text: 'Polonia', correct: true},
            {text: 'Rusia', correct: false},
            {text: 'Ucrania', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos países nació el ex jugador Andrew Bogut?',
        answers: [
            {text: 'Alemania', correct: false},
            {text: 'Australia', correct: true},
            {text: 'Reino Unido', correct: false},
            {text: 'Canadá', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos países nació Steven Adams?',
        answers: [
            {text: 'Irlanda', correct: false},
            {text: 'Nueva Zelanda', correct: true},
            {text: 'Australia', correct: false},
            {text: 'Reino Unido', correct: false}
        ]
    },
    {
        question: '¿En cuál de estos países nació Joel Embiid?',
        answers: [
            {text: 'Francia', correct: false},
            {text: 'Camerún', correct: true},
            {text: 'Estados Unidos', correct: false},
            {text: 'Nigeria', correct: false}
        ]
    },
// ¿Cuál de estos jugadores no es de nacionalidad Dominicana?
    {
        question: '¿Cuál de estos jugadores no es de nacionalidad Dominicana?',
        answers: [
            {text: 'Karl Anthony-Towns', correct: false},
            {text: 'Carlos Arroyo', correct: true},
            {text: 'Al Horford', correct: false},
            {text: 'Chris Duarte', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no es de nacionalidad Española?',
        answers: [
            {text: 'José Calderón', correct: false},
            {text: 'José Juan Barea', correct: true},
            {text: 'Ricky Rubio', correct: false},
            {text: 'Marc Gasol', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no es de nacionalidad Francesa?',
        answers: [
            {text: 'Joakim Noah', correct: false},
            {text: 'Luol Deng', correct: true},
            {text: 'Nicolas Batum', correct: false},
            {text: 'Boris Diaw', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no es de nacionalidad Argentina?',
        answers: [
            {text: 'Luis Scola', correct: false},
            {text: 'Willy Hernangómez', correct: true},
            {text: 'Andrés Nocioni', correct: false},
            {text: 'Fabricio Oberto', correct: false}
        ]
    },
// ¿Quién fue el entrenador de los EQUIPO en el Campeonato ganado en AÑO?
    {
        question: '¿Quién fue el entrenador de los Cleveland Cavaliers en el Campeonato ganado en 2016?',
        answers: [
            {text: 'Tyronn Lue', correct: true},
            {text: 'David Blatt', correct: false},
            {text: 'Mike Brown', correct: false},
            {text: 'J.B. Bickerstaff', correct: false}
        ]
    },
    {
        question: '¿Quién fue el entrenador de los Boston Celtics en el Campeonato ganado en 2008?',
        answers: [
            {text: 'Doc Rivers', correct: true},
            {text: 'Larry Bird', correct: false},
            {text: 'Danny Ainge', correct: false},
            {text: 'Brad Stevens', correct: false}
        ]
    },
// ¿Cuál de estos jugadores no ganó el premio al Rookie del Año?
    {
        question: '¿Cuál de estos jugadores no ganó el premio al Rookie del Año?',
        answers: [
            {text: 'Pau Gasol', correct: false},
            {text: 'Allen Iverson', correct: false},
            {text: 'Blake Griffin', correct: false},
            {text: 'Kobe Bryant', correct: true}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no ganó el premio al Rookie del Año?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Luka Dončić', correct: false},
            {text: 'Kyrie Irving', correct: false},
            {text: 'Dwight Howard', correct: true}
        ]
    },
// ¿Cuál de estos jugadores no ganó ningún Campeonato de la NBA?
    {
        question: '¿Cuál de estos jugadores no ganó ningún Campeonato de la NBA?',
        answers: [
            {text: 'Charles Barkley', correct: true},
            {text: 'Jason Kidd', correct: false},
            {text: 'Marc Gasol', correct: false},
            {text: 'Jason Williams', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no ganó ningún Campeonato de la NBA?',
        answers: [
            {text: 'Chris Paul', correct: true},
            {text: 'Gary Payton', correct: false},
            {text: 'Isiah Thomas', correct: false},
            {text: 'Dwight Howard', correct: false}
        ]
    },
// ¿Cuántas veces fue JUGADOR el máximo anotador de la Temporada Regular?
    {
        question: '¿Cuántas veces fue Carmelo Anthony el máximo anotador de la Temporada Regular?',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: '¿Cuántas veces fue LeBron James el máximo anotador de la Temporada Regular?',
        answers: [
            {text: '1', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: '¿Cuántas veces fue Kobe Bryant el máximo anotador de la Temporada Regular?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: '¿Cuántas veces fue Michael Jordan el máximo anotador de la Temporada Regular?',
        answers: [
            {text: '9', correct: false},
            {text: '10', correct: true},
            {text: '8', correct: false},
            {text: '11', correct: false}
        ]
    },
    {
        question: '¿Cuántas veces fue Allen Iverson el máximo anotador de la Temporada Regular?',
        answers: [
            {text: '1', correct: false},
            {text: '4', correct: true},
            {text: '2', correct: false},
            {text: '3', correct: false}
        ]
    },
// ¿Cuál fue el máximo de puntos conseguidos en un partido por JUGADOR?
    {
        question: '¿Cuál fue el máximo de puntos conseguidos en un partido por Michael Jordan?',
        answers: [
            {text: '58', correct: false},
            {text: '84', correct: false},
            {text: '72', correct: false},
            {text: '69', correct: true}
        ]
    },
    {
        question: '¿Cuál fue el máximo de puntos conseguidos en un partido por LeBron James?',
        answers: [
            {text: '68', correct: false},
            {text: '66', correct: false},
            {text: '72', correct: false},
            {text: '61', correct: true}
        ]
    },
// ¿Cuál fue el último equipo en la carrera de JUGADOR?
    {
        question: '¿Cuál fue el último equipo en la carrera de Manu Ginobili?',
        answers: [
            {text: 'Philadelphia 76ers', correct: false},
            {text: 'Charlotte Hornets', correct: false},
            {text: 'San Antonio Spurs', correct: true},
            {text: 'Miami Heat', correct: false}
        ]
    },
    {
        question: '¿Cuál fue el último equipo en la carrera de Paul Pierce?',
        answers: [
            {text: 'Boston Celtics', correct: false},
            {text: 'Washington Wizards', correct: false},
            {text: 'Los Angeles Clippers', correct: true},
            {text: 'Brooklyn Nets', correct: false}
        ]
    },
    {
        question: '¿Cuál fue el último equipo en la carrera de Karl Malone?',
        answers: [
            {text: 'Utah Jazz', correct: false},
            {text: 'New York Knicks', correct: false},
            {text: 'Los Angeles Lakers', correct: true},
            {text: 'Orlando Magic', correct: false}
        ]
    },
    {
        question: '¿Cuál fue el último equipo en la carrera de Vince Carter?',
        answers: [
            {text: 'Toronto Raptors', correct: false},
            {text: 'Sacramento Kings', correct: false},
            {text: 'Atlanta Hawks', correct: true},
            {text: 'Phoenix Suns', correct: false}
        ]
    },
    {
        question: '¿Cuál fue el último equipo en la carrera de Michael Jordan?',
        answers: [
            {text: 'Chicago Bulls', correct: false},
            {text: 'Charlotte Hornets', correct: false},
            {text: 'Washington Wizards', correct: true},
            {text: 'New York Knicks', correct: false}
        ]
    },
    {
        question: '¿Cuál fue el último equipo en la carrera de Shaquille O\'Neal?',
        answers: [
            {text: 'Orlando Magic', correct: false},
            {text: 'Cleveland Cavaliers', correct: false},
            {text: 'Boston Celtics', correct: true},
            {text: 'Phoenix Suns', correct: false}
        ]
    },
    // ¿Cuál de estos jugadores ganó más Campeonatos de la NBA?
    {
        question: '¿Cuál de estos jugadores ganó más Campeonatos de la NBA?',
        answers: [
            {text: 'Kyle Lowry', correct: false},
            {text: 'Kevin Garnett', correct: false},
            {text: 'Ray Allen', correct: true},
            {text: 'Jason Kidd', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ganó más Campeonatos de la NBA?',
        answers: [
            {text: 'Dwyane Wade', correct: false},
            {text: 'Pau Gasol', correct: false},
            {text: 'Derek Fisher', correct: true},
            {text: 'Klay Thompson', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ganó más Campeonatos de la NBA?',
        answers: [
            {text: 'Kobe Bryant', correct: false},
            {text: 'LeBron James', correct: false},
            {text: 'Scottie Pippen', correct: true},
            {text: 'Tim Duncan', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores ganó más Campeonatos de la NBA?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Stephen Curry', correct: false},
            {text: 'Tim Duncan', correct: true},
            {text: 'LeBron James', correct: false}
        ]
    },
    // OTRAS
    {
        question: '¿Cuál de estos nombres se corresponde con el de el trofeo de Campeón de la NBA?',
        answers: [
            {text: 'Walter Kenney Championship Trophy', correct: false},
            {text: 'Oscar Robertson Championship Trophy', correct: false},
            {text: 'Larry O\'Brien Championship Trophy', correct: true},
            {text: 'Bob Cousy Championship Trophy', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos nombres se corresponde con el inventor del baloncesto?',
        answers: [
            {text: 'James Naismith', correct: true},
            {text: 'Larry O\'Brien', correct: false},
            {text: 'Maurice Podoloff', correct: false},
            {text: 'Phil Jackson', correct: false}
        ]
    },
    {
        question: '¿En qué ciudad estaba la "Burbuja" que permitió acabar la temporada 19/20 de la NBA?',
        answers: [
            {text: 'Los Angeles', correct: false},
            {text: 'New York', correct: false},
            {text: 'Miami', correct: false},
            {text: 'Orlando', correct: true}
        ]
    },
    {
        question: '¿Ante qué equipo consiguió anotar 81 puntos Kobe Bryant batiendo su marca personal?',
        answers: [
            {text: 'Toronto Raptors', correct: true},
            {text: 'Boston Celtics', correct: false},
            {text: 'Utah Jazz', correct: false},
            {text: 'Portland Trail Blazers', correct: false}
        ]
    },
    {
        question: '¿Con cuál de estas marcas firmó un contrato vitalicio Allen Iverson?',
        answers: [
            {text: 'Nike', correct: false},
            {text: 'Reebok', correct: true},
            {text: 'Adidas', correct: false},
            {text: 'Converse', correct: false}
        ]
    },
    {
        question: '¿Quién fue el comisionado de la NBA desde 1984 hasta 2014?',
        answers: [
            {text: 'Adam Silver', correct: false},
            {text: 'Bill Russell', correct: false},
            {text: 'Larry O\'Brien', correct: false},
            {text: 'David Stern', correct: true}
        ]
    },
    {
        question: '¿En cuál de estas ciudades comenzó jugando la Franquicia de los Grizzlies?',
        answers: [
            {text: 'Buffalo', correct: false},
            {text: 'Seattle', correct: false},
            {text: 'Vancouver', correct: true},
            {text: 'Rochester', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos equipos ganó el primer campeonato de la NBA?',
        answers: [
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'Philadelphia Warriors', correct: true},
            {text: 'Boston Celtics', correct: false},
            {text: 'Chicago Bulls', correct: false}
        ]
    },
    {
        question: '¿Cuál es el nombre completo de Kobe Bryant?',
        answers: [
            {text: 'Kobe Jeffrey Bryant', correct: false},
            {text: 'Kobe Bean Bryant', correct: true},
            {text: 'Kobe Guido Bryant', correct: false},
            {text: 'Kobe Vince Bryant', correct: false}
        ]
    },
    {
        question: '¿Quién fue el jugador más bajo en ganar el Concurso de Mates de la NBA?',
        answers: [
            {text: 'Nate Robinson (5\' 9" - 1.75cm)', correct: false},
            {text: 'Spud Webb (5\' 6" - 1.68cm)', correct: true},
            {text: 'Muggsy Bogues (5\' 3" - 1.60cm)', correct: false},
            {text: 'Earl Boykins (5\' 5" - 1.65cm)', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no ganó nunca el Concurso de Mates de la NBA?',
        answers: [
            {text: 'Kobe Bryant', correct: false},
            {text: 'Aaron Gordon', correct: true},
            {text: 'John Wall', correct: false},
            {text: 'Derrick Rose', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no ganó en dos ocasiones el Concurso de Mates de la NBA?',
        answers: [
            {text: 'Michael Jordan', correct: false},
            {text: 'Blake Griffin', correct: true},
            {text: 'Zach Lavine', correct: false},
            {text: 'Jason Richardson', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores cambió su nombre a "Metta World Peace"?',
        answers: [
            {text: 'Ron Artest', correct: true},
            {text: 'Kareem Abdul-Jabbar', correct: false},
            {text: 'Ron Harper', correct: false},
            {text: 'Dennis Rodman', correct: false}
        ]
    },
    {
        question: '¿Cuál es la altura de los aros de la NBA?',
        answers: [
            {text: '10\' - 305cm', correct: true},
            {text: '9\'8" - 300cm', correct: false},
            {text: '9\'7" - 295cm', correct: false},
            {text: '9\'5" - 290cm', correct: false}
        ]
    },
    {
        question: '¿Cuál es la distancia de la línea de 3 puntos hasta el aro en la NBA?',
        answers: [
            {text: '23\'9" - 724cm', correct: true},
            {text: '24\' - 732cm', correct: false},
            {text: '23\'6" - 716cm', correct: false},
            {text: '23\'3" - 708cm', correct: false}
        ]
    },    
    {
        question: '¿Quién era el jugador con más triples anotados antes de que le adelantara Stephen Curry?',
        answers: [
            {text: 'Ray Allen', correct: true},
            {text: 'Dirk Nowitzki', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Reggie Miller', correct: false}
        ]
    },    
    {
        question: '¿Qué otro deporte practicó Michael Jordan de manera profesional?',
        answers: [
            {text: 'Béisbol', correct: true},
            {text: 'Golf', correct: false},
            {text: 'Fútbol Americano', correct: false},
            {text: 'Fútbol', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores se convirtió en el MVP de la Temporada Regular más joven al conseguirlo con 22 años?',
        answers: [
            {text: 'Derrick Rose', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'LeBron James', correct: false},
            {text: 'Kareem Abdul Jabbar', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos equipos fue el único capaz de remontar un 3-1 en las Finales de la NBA?',
        answers: [
            {text: 'Cleveland Cavaliers', correct: true},
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'Detroit Pistons', correct: false},
            {text: 'Miami Heat', correct: false}
        ]
    },
    {
        question: '¿De qué jugador es la silueta que podemos ver en el logo de la NBA?',
        answers: [
            {text: 'Jerry West', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Bill Russell', correct: false},
            {text: 'Oscar Robertson', correct: false}
        ]
    },
    {
        question: '¿Qué significan las siglas de NBA?',
        answers: [
            {text: 'National Basketball Association', correct: true},
            {text: 'National Basketball Alliance', correct: false},
            {text: 'National Basketball Assembly', correct: false},
            {text: 'New Ballers Army', correct: false}
        ]
    },
    {
        question: '¿Qué antigua Franquicia pasó a llamarse Oklahoma City Thunder en 2008?',
        answers: [
            {text: 'Seattle Supersonics', correct: true},
            {text: 'Charlotte Bobcats', correct: false},
            {text: 'Buffalo Braves', correct: false},
            {text: 'New Jersey Nets', correct: false}
        ]
    },
    {
        question: '¿Qué nombre recibían los New Orleans Pelicans hasta su cambio en 2013?',
        answers: [
            {text: 'New Orleans Hornets', correct: true},
            {text: 'New Orleans Hurricanes', correct: false},
            {text: 'New Orleans Jazz', correct: false},
            {text: 'New Orleans Bobcats', correct: false}
        ]
    },
    {
        question: '¿Dónde jugaban los Nets hasta su mudanza a Brooklyn en 2012?',
        answers: [
            {text: 'New Jersey', correct: true},
            {text: 'Las Vegas', correct: false},
            {text: 'Vancouver', correct: false},
            {text: 'San Diego', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores está patrocinado por Under Armour?',
        answers: [
            {text: 'Stephen Curry', correct: true},
            {text: 'Lamelo Ball', correct: false},
            {text: 'Kawhi Leonard', correct: false},
            {text: 'John Wall', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores está patrocinado por Reebok?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: true},
            {text: 'Paul George', correct: false},
            {text: 'Damian Lillard', correct: false},
            {text: 'James Harden', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no pasó directo del Instituto a la NBA?',
        answers: [
            {text: 'Michael Jordan', correct: true},
            {text: 'LeBron James', correct: false},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Tracy McGrady', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no pasó directo del Instituto a la NBA?',
        answers: [
            {text: 'Shaquille O\'Neal', correct: true},
            {text: 'Dwight Howard', correct: false},
            {text: 'Amar\'e Stoudemire', correct: false},
            {text: 'J.R. Smith', correct: false}
        ]
    },
    {
        question: '¿De cuál de estas Franquicias fue dueño Michael Jordan?',
        answers: [
            {text: 'Charlotte Hornets', correct: true},
            {text: 'Chicago Bulls', correct: false},
            {text: 'New Orleans Pelicans', correct: false},
            {text: 'Washington Wizards', correct: false}
        ]
    },
    {
        question: '¿Cuál fue el primer equipo en la historia de la NBA en contratar a una mujer como entrenadora asistente?',
        answers: [
            {text: 'San Antonio Spurs', correct: true},
            {text: 'Sacramento Kings', correct: false},
            {text: 'Indiana Pacers', correct: false},
            {text: 'Miami Heat', correct: false}
        ]
    },
    {
        question: '¿Qué jugador de los San Antonio Spurs atrapó con sus manos un murciélago durante un partido de la NBA?',
        answers: [
            {text: 'Manu Ginobili', correct: true},
            {text: 'Tony Paker', correct: false},
            {text: 'Tim Duncan', correct: false},
            {text: 'Matt Bonner', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no consiguió nunca un cuádruple-doble?',
        answers: [
            {text: 'Wilt Chamberlain', correct: true},
            {text: 'Hakeem Olajuwon', correct: false},
            {text: 'David Robinson', correct: false},
            {text: 'Nate Thurmond', correct: false}
        ]
    },
    {
        question: '¿Contra qué equipo consiguió Michael Jordan su primer campeonato de la NBA?',
        answers: [
            {text: 'Los Angeles Lakers', correct: true},
            {text: 'Utah Jazz', correct: false},
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'Phoenix Suns', correct: false}
        ]
    },
    {
        question: '¿Contra qué equipo consiguió LeBron James su primer campeonato de la NBA?',
        answers: [
            {text: 'Oklahoma City Thunder', correct: true},
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'San Antonio Spurs', correct: false},
            {text: 'Dallas Mavericks', correct: false}
        ]
    },
    {
        question: '¿Cuál de estas Franquicias estableció el mejor récord de Temporada Regular en 73-9?',
        answers: [
            {text: 'Golden State Warriors', correct: true},
            {text: 'Chicago Bulls', correct: false},
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'San Antonio Spurs', correct: false}
        ]
    },
    {
        question: '¿Qué franquicia ganó 33 partidos consecutivos estableciendo un nuevo récord de la NBA?',
        answers: [
            {text: 'Los Angeles Lakers', correct: true},
            {text: 'Golden State Warriors', correct: false},
            {text: 'Chicago Bulls', correct: false},
            {text: 'Miami Heat', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no fue entrenador tras su retiro?',
        answers: [
            {text: 'Magic Johnson', correct: true},
            {text: 'Jason Kidd', correct: false},
            {text: 'Bill Russell', correct: false},
            {text: 'Larry Bird', correct: false}
        ]
    },
    {
        question: '¿Quién es el jugador con más Campeonatos de la NBA en su carrera como jugador?',
        answers: [
            {text: 'Bill Russell', correct: true},
            {text: 'Magic Johnson', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Kareem Abudl-Jabbar', correct: false}
        ]
    },
    {
        question: '¿Quién es el jugador más joven en la historia de la NBA en anotar 70 puntos en un partido?',
        answers: [
            {text: 'Devin Booker', correct: true},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Luka Doncic', correct: false},
            {text: 'Wilt Chamberlain', correct: false}
        ]
    },
    {
        question: '¿Quién fue el primer jugador en la historia de la NBA en ganar los premjos de MVP y Mejor Defensor del Año en la misma temporada?',
        answers: [
            {text: 'Hakeem Olajuwon', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Bill Russell', correct: false},
            {text: 'Kareem Abdul-Jabbar', correct: false}
        ]
    },
    {
        question: '¿Quién fue el jugador más joven en la historia de la NBA en ganar el MVP de la Temporada Regular?',
        answers: [
            {text: 'Derrick Rose', correct: true},
            {text: 'Magic Johnson', correct: false},
            {text: 'LeBron James', correct: false},
            {text: 'Kareem Abdul-Jabbar', correct: false}
        ]
    },
    {
        question: '¿Quién fue el jugador más joven en hacer su debut en la NBA?',
        answers: [
            {text: 'Andrew Bynum', correct: true},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Jrue Holiday', correct: false},
            {text: 'Ricky Rubio', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores saltó por encima de un coche en el Concurso de Mates?',
        answers: [
            {text: 'Blake Griffin', correct: true},
            {text: 'Victor Oladipo', correct: false},
            {text: 'Zach Lavine', correct: false},
            {text: 'Aaron Gordon', correct: false}
        ]
    },
    {
        question: '¿Quién fue el jugador más joven en debutar en el All Star Game?',
        answers: [
            {text: 'Kobe Bryant', correct: true},
            {text: 'LeBron James', correct: false},
            {text: 'Magic Johnson', correct: false},
            {text: 'Anthony Davis', correct: false}
        ]
    },
    {
        question: '¿En qué ciudad empezaron jugando los Lakers hasta su traslado a Los Angeles en 1960?',
        answers: [
            {text: 'Minneapolis', correct: true},
            {text: 'San Diego', correct: false},
            {text: 'San Francisco', correct: false},
            {text: 'Kansas City', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores es primo de Vince Carter?',
        answers: [
            {text: 'Tracy McGrady', correct: true},
            {text: 'James Harden', correct: false},
            {text: 'Allen Iverson', correct: false},
            {text: 'Grant Hill', correct: false}
        ]
    },
    {
        question: '¿Cuál era el dorsal de Michael Jordan con el Team USA?',
        answers: [
            {text: '9', correct: true},
            {text: '3', correct: false},
            {text: '10', correct: false},
            {text: '23', correct: false}
        ]
    },
    {
        question: '¿Cuál era el dorsal de Kobe Bryant con el Team USA?',
        answers: [
            {text: '10', correct: true},
            {text: '6', correct: false},
            {text: '24', correct: false},
            {text: '8', correct: false}
        ]
    },
    {
        question: '¿Cuál era el dorsal de Tim Duncan en la NBA?',
        answers: [
            {text: '21', correct: true},
            {text: '13', correct: false},
            {text: '32', correct: false},
            {text: '4', correct: false}
        ]
    },
    {
        question: '¿Cuál era el dorsal de Magic Johnson en la NBA?',
        answers: [
            {text: '32', correct: true},
            {text: '33', correct: false},
            {text: '34', correct: false},
            {text: '31', correct: false}
        ]
    },
    {
        question: '¿Qué dorsal llevó Michael Jordan en Chicago Bulls aparte del 23?',
        answers: [
            {text: '45', correct: true},
            {text: '9', correct: false},
            {text: '3', correct: false},
            {text: '32', correct: false}
        ]
    },
    {
        question: '¿Qué dorsal llevó LeBron James a lo largo de su carrera aparte del 23?',
        answers: [
            {text: '6', correct: true},
            {text: '10', correct: false},
            {text: '32', correct: false},
            {text: '1', correct: false}
        ]
    },
    {
        question: '¿Qué dorsal llevó Kobe Bryant en Los Angeles Lakers hasta cambiarlo por el 24 en 2004?',
        answers: [
            {text: '8', correct: true},
            {text: '10', correct: false},
            {text: '21', correct: false},
            {text: '6', correct: false}
        ]
    },
    {
        question: '¿Qué jugador tiene el récord de más puntos por partido en una temporada?',
        answers: [
            {text: 'Wilt Chamberlain', correct: true},
            {text: 'Michael Jordan', correct: false},
            {text: 'Kareem Abdul Jabbar', correct: false},
            {text: 'James Harden', correct: false}
        ]
    },
    {
        question: '¿Qué jugador tiene el récord de más rebotes por partido en una temporada?',
        answers: [
            {text: 'Wilt Chamberlain', correct: true},
            {text: 'Bill Russell', correct: false},
            {text: 'Dennis Rodman', correct: false},
            {text: 'Moses Malone', correct: false}
        ]
    },
    {
        question: '¿Qué jugador tiene el récord de más asistencias por partido en una temporada?',
        answers: [
            {text: 'John Stockton', correct: true},
            {text: 'Isiah Thomas', correct: false},
            {text: 'Magic Johnson', correct: false},
            {text: 'Steve Nash', correct: false}
        ]
    },
    {
        question: '¿Qué jugador tiene el récord de más robos por partido en una temporada?',
        answers: [
            {text: 'Alvin Robertson', correct: true},
            {text: 'Magic Johnson', correct: false},
            {text: 'John Stockton', correct: false},
            {text: 'Michael Jordan', correct: false}
        ]
    },
    {
        question: '¿Qué jugador tiene el récord de más tapones por partido en una temporada?',
        answers: [
            {text: 'Mark Eaton', correct: true},
            {text: 'Manute Bol', correct: false},
            {text: 'Hakeem Olajuwon', correct: false},
            {text: 'Dikembe Mutombo', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no ganó nunca un Concurso de Triples de la NBA?',
        answers: [
            {text: 'James Harden', correct: true},
            {text: 'Klay Thompson', correct: false},
            {text: 'Ray Allen', correct: false},
            {text: 'Kyrie Irving', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no ganó nunca un Concurso de Triples de la NBA?',
        answers: [
            {text: 'Kevin Durant', correct: true},
            {text: 'Dirk Nowitzki', correct: false},
            {text: 'Kevin Love', correct: false},
            {text: 'Devin Booker', correct: false}
        ]
    },
    {
        question: '¿Quién es el jugador que ha conseguido más triples dobles en Temporada Regular en la historia de la NBA?',
        answers: [
            {text: 'Russell Westbrook', correct: true},
            {text: 'Oscar Robertson', correct: false},
            {text: 'Magic Johnson', correct: false},
            {text: 'LeBron James', correct: false}
        ]
    },
    {
        question: '¿En qué equipo universitario jugó Michael Jordan?',
        answers: [
            {text: 'North Carolina Tar Heels', correct: true},
            {text: 'Duke Blue Devils', correct: false},
            {text: 'Virginia Cavaliers', correct: false},
            {text: 'Villanova Wildcats', correct: false}
        ]
    },
    {
        question: '¿Quién es el jugador con más premios al MVP de la Temporada Regular en la historia de la NBA?',
        answers: [
            {text: 'Kareem Abdul-Jabbar', correct: true},
            {text: 'Wilt Chamberlain', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Bill Russell', correct: false}
        ]
    },
    {
        question: '¿Qué jugador estableció con 30 asistencias el récord de más asistencias en un partido de la NBA?',
        answers: [
            {text: 'Scott Skiles', correct: true},
            {text: 'Jason Kidd', correct: false},
            {text: 'Steve Nash', correct: false},
            {text: 'Russell Westbrook', correct: false}
        ]
    },
    {
        question: '¿Qué jugador estableció con 14 triples el récord de más triples en un partido de la NBA?',
        answers: [
            {text: 'Klay Thompson', correct: true},
            {text: 'Stephen Curry', correct: false},
            {text: 'Damian Lillard', correct: false},
            {text: 'Kobe Bryant', correct: false}
        ]
    },
    {
        question: '¿Quién es el entrenador que ganó más Campeonatos de la NBA?',
        answers: [
            {text: 'Phil Jackson', correct: true},
            {text: 'Red Auerbach', correct: false},
            {text: 'Pat Riley', correct: false},
            {text: 'Gregg Popovich', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no ganó nunca el premio al mejor Sexto Hombre de la Temporada?',
        answers: [
            {text: 'Andre Iguodala', correct: true},
            {text: 'James Harden', correct: false},
            {text: 'J.R. Smith', correct: false},
            {text: 'Lamar Odom', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no ganó nunca el premio al mejor Sexto Hombre de la Temporada?',
        answers: [
            {text: 'Kevin Love', correct: true},
            {text: 'Jason Terry', correct: false},
            {text: 'Toni Kukoc', correct: false},
            {text: 'Manu Ginobili', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no fue elegido en la primera elección del Draft de la NBA?',
        answers: [
            {text: 'Kobe Bryant', correct: true},
            {text: 'LeBron James', correct: false},
            {text: 'Magic Johnson', correct: false},
            {text: 'Yao Ming', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no fue elegido en la primera elección del Draft de la NBA?',
        answers: [
            {text: 'Michael Jordan', correct: true},
            {text: 'Kyrie Irving', correct: false},
            {text: 'Tim Duncan', correct: false},
            {text: 'Allen Iverson', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no fue elegido en la primera elección del Draft de la NBA?',
        answers: [
            {text: 'Kevin Garnett', correct: true},
            {text: 'Derrick Rose', correct: false},
            {text: 'Dwight Howard', correct: false},
            {text: 'Hakeem Olajuwon', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no fue elegido en la primera elección del Draft de la NBA?',
        answers: [
            {text: 'Giannis Antetokounmpo', correct: true},
            {text: 'Shaquille O\'Neal', correct: false},
            {text: 'Andrea Bargnani', correct: false},
            {text: 'Anthony Davis', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no fue elegido en la primera elección del Draft de la NBA?',
        answers: [
            {text: 'Kevin Durant', correct: true},
            {text: 'John Wall', correct: false},
            {text: 'Zion Williamson', correct: false},
            {text: 'Blake Griffin', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no permaneció toda su carrera en los San Antonio Spurs?',
        answers: [
            {text: 'Tony Parker', correct: true},
            {text: 'David Robinson', correct: false},
            {text: 'Manu Ginobili', correct: false},
            {text: 'Tim Duncan', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no permaneció toda su carrera en Los Angeles Lakers?',
        answers: [
            {text: 'Derek Fisher', correct: true},
            {text: 'Kobe Bryant', correct: false},
            {text: 'Jerry West', correct: false},
            {text: 'Magic Johnson', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no permaneció toda su carrera en la misma Franquicia?',
        answers: [
            {text: 'Julius Erving', correct: true},
            {text: 'Stephen Curry', correct: false},
            {text: 'Udonis Haslem', correct: false},
            {text: 'Isiah Thomas', correct: false}
        ]
    },
    {
        question: '¿Cuál de estos jugadores no permaneció toda su carrera en la misma Franquicia?',
        answers: [
            {text: 'Michael Jordan', correct: true},
            {text: 'John Stockton', correct: false},
            {text: 'Reggie Miller', correct: false},
            {text: 'Dirk Nowitzki', correct: false}
        ]
    },
    {
        question: '¿El hijo de cuál de estos ex jugadores ganó el Campeonato de la NBA en 2022?',
        answers: [
            {text: 'Gary Payton', correct: true},
            {text: 'Arvydas Sabonis', correct: false},
            {text: 'Kenyon Martin', correct: false},
            {text: 'Magic Johnson', correct: false}
        ]
    },
    {
        question: '¿Quién fue el único jugador de la NBA en ganar el premio MVP de las Finales perdiendo la serie?',
        answers: [
            {text: 'Jerry West', correct: true},
            {text: 'LeBron James', correct: false},
            {text: 'Michael Jordan', correct: false},
            {text: 'Allen Iverson', correct: false}
        ]
    },
    {
        question: '¿Qué equipo perdió 28 partidos consecutivos en la temporada 23/24 estableciendo la peor racha de la historia de la NBA?',
        answers: [
            {text: 'Detroit Pistons', correct: true},
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'San Antonio Spurs', correct: false},
            {text: 'Washington Wizards', correct: false}
        ]
    },
    {
        question: '¿De qué Franquicia es la mascota "Go the Gorilla"?',
        answers: [
            {text: 'Phoenix Suns', correct: true},
            {text: 'Portland Trail Blazers', correct: false},
            {text: 'Brooklyn Nets', correct: false},
            {text: 'San Antonio Spurs', correct: false}
        ]
    },
]

export { questions, preguntas }
