import Box, { type Item } from "@/components/search/Box";

const items: Item[] = [
  { id: 0, name: "New York Yankees", kind: "Baseball" },
  { id: 1, name: "Los Angeles Lakers", kind: "Basketball" },
  { id: 2, name: "Dallas Cowboys", kind: "Football" },
  { id: 3, name: "Manchester United", kind: "Soccer" },
  { id: 4, name: "New England Patriots", kind: "Football" },
  { id: 5, name: "Golden State Warriors", kind: "Basketball" },
  { id: 6, name: "Real Madrid", kind: "Soccer" },
  { id: 7, name: "Chicago Cubs", kind: "Baseball" },
  { id: 8, name: "Toronto Maple Leafs", kind: "Hockey" },
  { id: 9, name: "Green Bay Packers", kind: "Football" },
  { id: 10, name: "Boston Red Sox", kind: "Baseball" },
  { id: 11, name: "FC Barcelona", kind: "Soccer" },
  { id: 12, name: "San Francisco 49ers", kind: "Football" },
  { id: 13, name: "Chicago Bulls", kind: "Basketball" },
  { id: 14, name: "Detroit Red Wings", kind: "Hockey" },
  { id: 15, name: "Pittsburgh Steelers", kind: "Football" },
  { id: 16, name: "Miami Heat", kind: "Basketball" },
  { id: 17, name: "New York Mets", kind: "Baseball" },
  { id: 18, name: "Philadelphia Eagles", kind: "Football" },
  { id: 19, name: "Houston Astros", kind: "Baseball" },
  { id: 20, name: "Chelsea FC", kind: "Soccer" },
  { id: 21, name: "Seattle Seahawks", kind: "Football" },
  { id: 22, name: "Boston Bruins", kind: "Hockey" },
  { id: 23, name: "Los Angeles Dodgers", kind: "Baseball" },
  { id: 24, name: "Cleveland Cavaliers", kind: "Basketball" },
  { id: 25, name: "Bayern Munich", kind: "Soccer" },
  { id: 26, name: "St. Louis Cardinals", kind: "Baseball" },
  { id: 27, name: "Denver Broncos", kind: "Football" },
  { id: 28, name: "Washington Capitals", kind: "Hockey" },
  { id: 29, name: "Brooklyn Nets", kind: "Basketball" },
  { id: 30, name: "Liverpool FC", kind: "Soccer" },
  { id: 31, name: "Atlanta Braves", kind: "Baseball" },
  { id: 32, name: "Minnesota Vikings", kind: "Football" },
  { id: 33, name: "New York Rangers", kind: "Hockey" },
  { id: 34, name: "San Antonio Spurs", kind: "Basketball" },
  { id: 35, name: "Paris Saint-Germain", kind: "Soccer" },
  { id: 36, name: "Kansas City Chiefs", kind: "Football" },
  { id: 37, name: "Montreal Canadiens", kind: "Hockey" },
  { id: 38, name: "Indiana Pacers", kind: "Basketball" },
  { id: 39, name: "Juventus FC", kind: "Soccer" },
  { id: 40, name: "Los Angeles Angels", kind: "Baseball" },
  { id: 41, name: "Arizona Cardinals", kind: "Football" },
  { id: 42, name: "Tampa Bay Lightning", kind: "Hockey" },
  { id: 43, name: "Portland Trail Blazers", kind: "Basketball" },
  { id: 44, name: "AC Milan", kind: "Soccer" },
  { id: 45, name: "Texas Rangers", kind: "Baseball" },
  { id: 46, name: "Baltimore Ravens", kind: "Football" },
  { id: 47, name: "New Jersey Devils", kind: "Hockey" },
  { id: 48, name: "Houston Rockets", kind: "Basketball" },
  { id: 49, name: "Manchester City", kind: "Soccer" },
  { id: 50, name: "Cincinnati Reds", kind: "Baseball" },
  { id: 51, name: "Buffalo Bills", kind: "Football" },
  { id: 52, name: "Philadelphia Flyers", kind: "Hockey" },
  { id: 53, name: "Milwaukee Bucks", kind: "Basketball" },
  { id: 54, name: "Borussia Dortmund", kind: "Soccer" },
  { id: 55, name: "Oakland Athletics", kind: "Baseball" },
  { id: 56, name: "Los Angeles Rams", kind: "Football" },
  { id: 57, name: "Vegas Golden Knights", kind: "Hockey" },
  { id: 58, name: "Oklahoma City Thunder", kind: "Basketball" },
  { id: 59, name: "Tottenham Hotspur", kind: "Soccer" },
  { id: 60, name: "San Diego Padres", kind: "Baseball" },
  { id: 61, name: "Miami Dolphins", kind: "Football" },
  { id: 62, name: "Pittsburgh Penguins", kind: "Hockey" },
  { id: 63, name: "Utah Jazz", kind: "Basketball" },
  { id: 64, name: "Ajax Amsterdam", kind: "Soccer" },
  { id: 65, name: "Detroit Tigers", kind: "Baseball" },
  { id: 66, name: "Chicago Bears", kind: "Football" },
  { id: 67, name: "Calgary Flames", kind: "Hockey" },
  { id: 68, name: "Phoenix Suns", kind: "Basketball" },
  { id: 69, name: "Inter Milan", kind: "Soccer" },
  { id: 70, name: "San Francisco Giants", kind: "Baseball" },
  { id: 71, name: "New Orleans Saints", kind: "Football" },
  { id: 72, name: "Colorado Avalanche", kind: "Hockey" },
  { id: 73, name: "Toronto Raptors", kind: "Basketball" },
  { id: 74, name: "Napoli", kind: "Soccer" },
  { id: 75, name: "Seattle Mariners", kind: "Baseball" },
  { id: 76, name: "Los Angeles Chargers", kind: "Football" },
  { id: 77, name: "Minnesota Wild", kind: "Hockey" },
  { id: 78, name: "Memphis Grizzlies", kind: "Basketball" },
  { id: 79, name: "AS Roma", kind: "Soccer" },
  { id: 80, name: "Washington Nationals", kind: "Baseball" },
  { id: 81, name: "Cleveland Browns", kind: "Football" },
  { id: 82, name: "Nashville Predators", kind: "Hockey" },
  { id: 83, name: "New York Knicks", kind: "Basketball" },
  { id: 84, name: "Valencia CF", kind: "Soccer" },
  { id: 85, name: "Milwaukee Brewers", kind: "Baseball" },
  { id: 86, name: "Tennessee Titans", kind: "Football" },
  { id: 87, name: "Winnipeg Jets", kind: "Hockey" },
  { id: 88, name: "Sacramento Kings", kind: "Basketball" },
  { id: 89, name: "Atletico Madrid", kind: "Soccer" },
  { id: 90, name: "Kansas City Royals", kind: "Baseball" },
  { id: 91, name: "Jacksonville Jaguars", kind: "Football" },
  { id: 92, name: "Edmonton Oilers", kind: "Hockey" },
  { id: 93, name: "Orlando Magic", kind: "Basketball" },
  { id: 94, name: "Sevilla FC", kind: "Soccer" },
  { id: 95, name: "Pittsburgh Pirates", kind: "Baseball" },
  { id: 96, name: "Carolina Panthers", kind: "Football" },
  { id: 97, name: "Ottawa Senators", kind: "Hockey" },
  { id: 98, name: "Charlotte Hornets", kind: "Basketball" },
  { id: 99, name: "Lazio", kind: "Soccer" },
  { id: 100, name: "Spain", kind: "Euro" },
  { id: 101, name: "Italy", kind: "Euro" },
  { id: 102, name: "England", kind: "Euro" },
  { id: 103, name: "Germany", kind: "Euro" },
  { id: 104, name: "France", kind: "Euro" },
];

export default function Page() {
  return (
    <div className="w-full flex items-center justify-center">
      <Box items={items} />
    </div>
  );
}
