import {Button, Card, CircularProgress, Container, Grid, TextField, Typography} from "@mui/material";
import React from 'react';

export default function CreateQuiz() {
    const [generating, setGenerating] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGenerating(true);
        const formData = new FormData(e.target);
        const content = formData.get('content');
        const response = await fetch('/quizzes', {
            body: JSON.stringify({ content }),
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        setGenerating(false);
        const json = await response.json();
        window.location.href = `/quizzes/${json.quiz.id}`;
    }
    return(
        <Container maxWidth="sm">
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item>
                <Typography fontWeight="bold" variant="h2" margin={5} textAlign="center">Make your Quiz</Typography>
                </Grid>
                <Grid item>
                    <Card style={{padding: 15}} variant="outlined">
                        <form onSubmit={handleSubmit}>
                            <TextField fullWidth label="Générer un quiz" name="content" />
                            <Button disabled={generating} fullWidth style={{marginTop: 20}} type="submit" variant="contained">
                                { generating
                                    ? <CircularProgress color="secondary" />
                                    :'Gérérer'
                                }
                            </Button>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}
